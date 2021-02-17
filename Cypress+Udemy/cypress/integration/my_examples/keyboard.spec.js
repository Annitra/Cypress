describe('Simulate keyboard press',()=>{
    it('Should press enter at the keyboard',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#searchTerm')
            .type('some text {enter}');
    })
})
