describe('Viewport tests',()=>{
    it('720p',()=>{
        cy.viewport(1280,720)
        cy.visit('http://www.example.com');
        cy.wait(3000);
    });
    it('1080p',()=>{
        cy.viewport(1980,1080);
        cy.visit('http://www.example.com');
        cy.wait(3000);
    });
    it('Iphone X',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com');
        cy.wait(3000);
    });
    it('Ipad mini',()=>{
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com');
        cy.wait(3000);
    }); it('Macbook 15',()=>{
        cy.viewport('macbook-15')
        cy.visit('http://www.example.com');
        cy.wait(3000);
    });


})
