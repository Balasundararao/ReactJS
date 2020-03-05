// Given two strings A and B of lowercase letters, return true if and only if 
// we can swap two letters in A so that the result equals B.

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let i = -1;
    let j = -1;
    if( A.length != B.length ) return false;
    
    if( A == B) {
        if( new Set(A).size < A.length) {
            return true;
        }
        return false; 
    }
    for (const k in A) {
        // identify two mismatched chars. if more than two, return false
        if (A[k] === B[k]) {
            continue;
        }
        if (i === -1) {
            i = k
        } else if (j === -1) {
            j = k
        } else {
            return false;
        }
    }
    return A[i] === B[j] && A[j] === B[i];
};

describe('Tests for Buddy Strings', () => {

    it(' A is "ab" and B is ba should be true', () => {
        expect( buddyStrings("ab", "ba")).toBe(true);
    })
    it(' A is "aaaaaaabc" and B is aaaaaaacb should be true', () => {
        expect( buddyStrings("aaaaaaabc", "aaaaaaacb")).toBe(true);
    })

    it(' A is "" and B is aa  should be false', () => {
        expect( buddyStrings("", "aa")).toBe(false);
    })
    
    it(' A is "ab" and B is ab  should be false', () => {
        expect( buddyStrings("ab", "ab")).toBe(false);
    })
    
    it(' A is "aa" and B is aa  should be true', () => {
        expect( buddyStrings("aa", "aa")).toBe(true);
    })
})
