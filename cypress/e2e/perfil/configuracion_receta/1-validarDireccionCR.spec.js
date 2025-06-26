import loginPage from "../../login/loginPage"
import perfilPage from "../perfilPage"

describe("Configuracion de receta", function (){
    const perfil = new perfilPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.datos = data });
    });
    it("Validar que exista una direccion por default en configuracion de receta", function(){

        log.login(this.datos.url,this.datos.correo,this.datos.contrasena);
        perfil.botonPerfil();
        perfil.botonConfigReceta();
        
        //Validacion
        cy.get('div[id="container-prescriptions-config"]').should('have.class','row no-padding no-margin directions-content flex-nowrap flex-md-wrap');
    });  
});