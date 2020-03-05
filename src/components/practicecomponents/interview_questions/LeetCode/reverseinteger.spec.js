// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer 
// range: [−231,  231 − 1]. For the purpose of this problem, assume that your function 
// returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    const trans = n =>  n.toString().split("").reverse().join("");

    return x > 2 ** 31 - 1 || x < -(2 ** 31)
      ? 0
      : x >= 0
      ? Number(trans(x))
      : Number(trans(-x)) * -1;
};

test('Input 123 to be 321', () => {
    expect(reverse(123)).toBe(321);
});
test('Input -123 to be -321', () => {
    expect(reverse(-123)).toBe(-321);
});

test('Input 120 to be 21', () => {
    expect(reverse(120)).toBe(21);
});