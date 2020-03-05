const JsonPlaceHolderService = require('./JsonPlaceHolderService');


describe("JSON Place Holder Services", () => {
    it("Sum of 2 values ", () => {
        expect(JsonPlaceHolderService.add(2,4)).toEqual( 6) ;
    })

    it('JSON Place Holder Services fetchUser...', () => {
        JsonPlaceHolderService.fetchUser().then( data => {
            expect( data.name).toEqual('Leanne Graham');
        });
    })
});
