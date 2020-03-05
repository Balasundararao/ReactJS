function prime(num){
    if( num< 2) return false;
    for( var i=2; i< num; i++){
        if( num % i  === 0 ) return false; 
    }
    return true;
}

test('Validate 3 Prime Number', () => {
    expect(prime(3)).toBe(true);
})
test('Validate 6 Prime Number', () => {
    expect(prime(6)).toBe(false);
})
test('Validate 7 Prime Number', () => {
    expect(prime(7)).toBe(true);
})

