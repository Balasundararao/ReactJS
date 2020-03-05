var countPrimes = function(n) {
    let pArr = new Array(n).fill(true);
    pArr[0] =false ;
    pArr[1] = false;

    for( let i = 2; i< Math.sqrt(n); i++ ){
        for( let j=2;  i*j < n ; j++){
            pArr[i*j] = false;
        }
    }
    return pArr.filter( n => n == true).length;
};

//countPrimes( 10 );

describe("Count Prime Numbers", () => {
    it('Input 10,  Output 4. There are 4 prime numbers less than 10, 2,3,5,7', () =>  {
        expect( countPrimes(10)).toBe(4);
    })

})