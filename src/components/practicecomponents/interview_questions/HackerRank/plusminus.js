// Given an array of integers, calculate the fractions of its elements that are positive,
// negative, and are zeros. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,
//  though answers with absolute error of up to  are acceptable.

// For example, given the array  there are  elements, two positive, two negative and one zero. Their
//  ratios would be ,  and . It should be printed as

// 0.400000
// 0.400000
// 0.200000

// Function Description

// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers
// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .

// Constraints



// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         

// Complete the plusMinus function below.
function plusMinus(arr) {
    let res=[];
    const initialObj = { positive: 0, negative: 0, stable: 0  }
    let resArr = arr.reduce( (acc,val) => {
        if( val > 0 ) {
            acc["positive"]++;
        } else if( val < 0) {
            acc["negative"]++;
        } else{
            acc["stable"]++
        }
        return acc; 
    }, initialObj)

    console.log( resArr );
    //return Object.values( resArr ).map(  v =>  parseFloat((v /arr.length)).toFixed(6)).split(''); 
    return Object.values( resArr ).map( v => (v/arr.length).toFixed(6)).split('').join('');


    return null; 
}

console.log( plusMinus([-4, 3, -9,0, 4, 1]) );

// test('Plus Minus Calculation....', () => {
//     expect( plusMinus([-4, 3, -9,0, 4, 1])).toEqual([0.500000, 0.333333, 0.166667])
// })
