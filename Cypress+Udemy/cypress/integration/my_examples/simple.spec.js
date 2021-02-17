
describe('My first test with cypress',()=>{
    it('True should be true',()=>{
        expect(true).to.equal(true);
    })
});

describe('Browser actions',()=>{
    it('Should load correct url',()=>{
        cy.visit('http://example.com');
    });
    it('Should check correct url',()=>{
        cy.url().should('include','example.com');
    });
    it('Should check for correct element',()=>{
        cy.get('h1').should('be.visible');
    });
});
