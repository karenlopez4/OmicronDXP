import loginPage from "./loginPage"
describe("Login", function (){
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.datos = data });
    });
    it("Autenticacion con credenciales validas", function(){
        const log = new loginPage();
        log.login(this.datos.url,this.datos.correo,this.datos.contrasena);
        
        //Validacion
        cy.get('div[id="btn-logout"]').should('exist');
    });  
});

