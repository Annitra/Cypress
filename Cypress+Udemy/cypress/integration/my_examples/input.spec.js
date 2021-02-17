describe('Work with inputs',()=>{
    it('Should load login form',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.clearCookies({log:true});
        cy.clearLocalStorage('your item',{log:true});
        cy.title().should('include','Zero - Log in');
        const date = new Date(2020,3,10).getTime();
        cy.clock(date);
        cy.log(date);
    })
    it('Should fill username',()=>{
        cy.get('#user_login').as('username');//assign(give) the name for selector, save selector as alies
        cy.get('@username')
            .clear();
        cy.get('@username')
            .type('Some valid username',{delay:50});
    });
    it('Should fill password',()=>{
        cy.get('#user_password')
            .clear();
        cy.get('#user_password')
            .type('Some valid password');
    });
    it('Should submit form',()=>{
        cy.contains('Sign in')
            .click();
    });
    it('Should mark checkbox',()=>{
        cy.get('input[type="checkbox"]')
            .click();
        cy.wait(5000);
    })
    it('Should error message appeared',()=>{
        cy.get('.alert.alert-error')
            .should('be.visible')
            .and('contains','Login and/or password are wrong');
        //Check thant error message is appeared and this message is correct for this situation. Its multiple assertions
    });
})
