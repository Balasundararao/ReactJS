
describe('Whistler Perf Web - Support page.', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/whistler-web/compute/support');
    })
    it('H1 + P tag and text validations...', function() {
        cy.get('h1').should('have.length', 1)
        cy.get('h1').should('contain', 'Getting Support on Whistler');
        cy.get('h1 + p').should('contain', 'Compute is backed by round-the-clock operational support, a solutions team for best practices and guidance, and the overall community of Compute users.')
    })

    it('Go to Whistler Validations', function() {
        cy.get('.gotowhistler h5')
        .should('contain','System Status')

        cy.get('.gotowhistler a').
        should('contain', 'Go to whistler-perf.apple.com ›')
        .and('have.attr', 'href')
        .and('include', 'http://whistler-perf.apple.com')
    })

    it('File a Radar Link Validations', function() {
        cy.get('.filearadar h4')
        .should('contain', 'Development Issues')

        cy.get('.filearadar h5')
        .should('contain', 'File a radar')

        cy.get('.filearadar p')
        .should('contain', 'File a radar to ireporter | Whistler with a detailed description of your issue. Low-impact bug reports, feature requests, and usability feedback will be triaged within one week and backlogged for future consideration. Radars for regressions will be triaged and updated within an estimated two-day timeframe.')

        cy.get('.filearadar a')
        .should('contain', 'File a Radar')
        .and('have.attr','href')
        .and('include', 'rdar://new/problem/component=ireporter&version=Whistler')
    })

    it('Email Support Link Validations', function() {
        cy.get('.email_support h5')
        .should('contain', 'Send an Email')

        cy.get('.email_support p')
        .should('contain', 'Send a detailed description of your issue including as much debugging information as you can disclose to the whistler web Support team at bthunga@apple.com.')

        cy.get('.email_support a')
        .should('contain', 'Email Support')
        .and('have.attr','href')
        .and('include', 'mailto:bthunga@apple.com')
    })
});