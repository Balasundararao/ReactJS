// Given a non-empty array of integers, return the third maximum number in this array. 
// If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
// Accepted


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let countedList  = nums.reduce( (acc, val) => {
        if( val in acc) {
            acc[val]++;
        } else {
            acc[val] = 1
        }
        return acc; 
    }, {});

    let reverseObj = Object.keys(countedList).sort( (a,b) => a - b).reverse();
    if(reverseObj.length < 3){
        return Number(reverseObj[0]);
    } else {
        return Number(reverseObj[2]);
    }

};



describe('third maximum number' , () => {
    it( "[3, 2, 1] third max is 1", () => {
        expect(thirdMax([3,2,1])).toBe(1);
    })
    it( "[1,2] third max is 2", () => {
        expect(thirdMax([1,2])).toBe(2);
    })
    it( "[2,2,3,1] third max is 1", () => {
        expect(thirdMax([2,2,3,1])).toBe(1);
    })
})
