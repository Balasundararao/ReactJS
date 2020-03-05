/**
 * 
 *  
 */
const  fibonacci = num => {
    var previous_first = 0, previous_second = 1, next = 1;
    
    while(num > 0) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
        num--;
    }
    return previous_first;

};
    test('Fibonacci 0 equal of 0 ', () => {
        expect(fibonacci(0)).toEqual(0);
    });
    test('Fibonacci 1  equal of 1 ', () => {
        expect(fibonacci(1)).toEqual(1);
    });
    test('Fibonacci of 2 equal to 1 ', () => {
        expect(fibonacci(2)).toEqual(1);
    });
    test('Fibonacci of 3 equal to 1 ', () => {
        expect(fibonacci(3)).toEqual(2);
    });
    test('Fibonacci of 4 equal to 3 ', () => {
        expect(fibonacci(4)).toEqual(3);
    });
    test('Fibonacci of 5 equal to 5 ', () => {
        expect(fibonacci(5)).toEqual(5);
    });
    test('Fibonacci of 6 equal to 8 ', () => {
        expect(fibonacci(6)).toEqual(8);
    });
    test('Fibonacci of 7 equal to 13 ', () => {
        expect(fibonacci(7)).toEqual(13);
    });
    test('Fibonacci of 8 equal to 21 ', () => {
        expect(fibonacci(8)).toEqual(21);
    });
    test('Fibonacci of 9 equal to 34 ', () => {
        expect(fibonacci(9)).toEqual(34);
    });

