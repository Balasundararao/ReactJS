const factorial = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
}
describe('Factorial Number', () => {
    test('Factorial of 10 to be 120', () => {
        expect( factorial(5)).toBe(120)
    })
})
