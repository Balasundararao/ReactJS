describe('Whistler Perf Web - Footer Test Case', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('footer').as("footer"); // alias...
    })
    it('Footer Copyright Text Validations', function() {
        cy.get('@footer').find('div').contains('Copyright © 2020 Apple Inc. All rights reserved');
    })

    it('Footer Nav Link text Validations...', () => {
        cy.get('.navbar_bottom > ul > li  > a')
        .then(($a) => {
            expect($a, '2 items').to.have.length(2)
            expect($a.eq(0), 'first item').to.contain('Support')
            expect($a.eq(1), 'second item').to.contain('File a Radar')
        })
    })

    it('Footer Nav Link href Validations...', () => {
        cy
        .get('.navbar_bottom > ul > li  > a')
        .should(($a) => {
            expect($a).to.have.length(2)
            expect($a[0].href).to.contain('http://localhost:3000/compute/support/')
            expect($a[1].href).to.contain('rdar://new/problem/component=ireporter&version=Whistler')
        })
    })
})