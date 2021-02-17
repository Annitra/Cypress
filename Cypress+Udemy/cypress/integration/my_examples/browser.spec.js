describe('Browser action',()=>{
    it('Should load website',()=>{
        cy.visit('http://books.toscrape.com/index.html');
        cy.log('Website loaded');
        cy.url()
            .should('include','index.html');
        cy.reload();
        cy.log('Website reload')
    });
    it('Should click on Travel category',()=>{
        cy.get('a')
            .contains('Travel')
            .click();
        cy.get('h1')
            .contains('Travel');
    });
    it('Should display correct number of books',()=>{
        cy.get('.product_pod')
            .its('length')
            .should('eq',11);

    });
})
