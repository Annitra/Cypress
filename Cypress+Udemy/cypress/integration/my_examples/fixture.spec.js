describe('Fixture static test data',()=>{
    it('Should login with data from user.json',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture('user')
            .then((user)=>{
                const username = user.username;
                const pass = user.password;
                cy.get('#user_login')
                    .type(username);
            })
    })
})
