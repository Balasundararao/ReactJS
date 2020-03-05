// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(num) {
    let res = [];
    while (num > 0) {
        let val = num % 26
        if (val === 0) {
            val = 26
        }
        res.unshift(String.fromCharCode(64 + val))
        num = (num - val) / 26
    }

    res = res.join('')

    return res;
};

describe('Excel Sheet Title.....', () => {

    it(' Input 1, output "A" ', () => {
        expect( convertToTitle(1)).toBe("A");
    })
    it(' Input 28, output "AB', () => {
        expect( convertToTitle(28, "AB")).toBe("AB");
    })
    it(' Input 701, output "ZY"', () => {
        expect( convertToTitle(701, "ZY")).toBe("ZY");
    })
})
