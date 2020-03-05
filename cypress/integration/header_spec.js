describe('Whistler Perf Web - Header Test Case..', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/whistler-web');
        cy.get('header').as("header");
    })
    it('Header and Top Nav Validations.....', function() {
        cy.get('@header').find('.navbar_top').find('li').find('a').should('have.length', 7);
    })
    
    it('Header and Top Sub Nav Text Validations.....', function() {
        cy.get('.navbar_topsub > ul > li > a').should( $a => {
            expect($a, '4 items').to.have.length(4)
            expect($a.eq(0), 'first item').to.contain('Datasets')
            expect($a.eq(1), 'second item').to.contain('On-boarding')
            expect($a.eq(2), 'third item').to.contain('Workspace')
            expect($a.eq(3), 'Fourth item').to.contain('Support')
        })
    })
    it('Header Nav Link href Validations...', () => {
        cy.get('.navbar_topsub > ul > li  > a')
        .should(($a) => {
            expect($a).to.have.length(4)
            expect($a[0].href).to.contain('http://localhost:3000/whistler-web/view-anomaly-groups')
            expect($a[1].href).to.contain('http://localhost:3000/whistler-web/evaluation')
            expect($a[2].href).to.contain('http://localhost:3000/whistler-web/topic')
            expect($a[3].href).to.contain('http://localhost:3000/whistler-web/compute/support')
        })
    })
})



