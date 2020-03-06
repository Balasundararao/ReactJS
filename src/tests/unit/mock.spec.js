// function add(a, b) {
//     return a + b; 
// }

const add = jest.fn( () => 3);

test("1, 2 to be truthy....", () => {
    expect( add(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1,2);
})

test("3, 3 to be truthy....", () => {
    expect( add(3, 3)).toBe(3);
})

test("test" , () => {
    expect(add(1,2)).toBe(3);
})