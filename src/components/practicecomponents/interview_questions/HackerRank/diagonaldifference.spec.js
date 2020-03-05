// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.
// diagonalDifference takes the following parameter:
// arr: an array of integers .
// Input Format
// The first line contains a single integer, , the number of rows and columns in the matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

function diagonalDifference(arr) {
    // Write your code here
    let leftsum = 0, rightsum = 0; 
    let n = arr.length; 
    for( let i =0; i< n; i++){
        leftsum += arr[i][i];
        rightsum += arr[i][n-1-i];
    }
    return Math.abs(leftsum - rightsum);
}
//console.log( diagonalDifference([ [1,2,3], [4,5,6], [9,8,9]]));
test( 'Diagonal Difference', () => {
    expect(diagonalDifference([ [1,2,3], [4,5,6], [9,8,9]]) ).toBe(2);
} )

test( 'Diagonal Difference', () => {
    expect(diagonalDifference([ [11,2,4], [4,5,6], [10,8,-12]]) ).toBe(15);
} )




