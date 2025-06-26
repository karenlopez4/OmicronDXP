import loginPage from "../../login/loginPage"
import perfilPage from "../perfilPage"
import crPage from "./crPage";

describe("Configuracion de receta", function (){
    const perfil = new perfilPage();
    const cr = new crPage();
    const log = new loginPage();
    before(function () {
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoConfiguracion_receta/data_receta').then(function (data) { this.datos = data });
    });
    it("Validar que en la vista previa se visualize la nueva direccion", function(){

        log.login(this.login.url, this.login.correo, this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonConfigReceta();
        cr.botonVistaPreviaCR();
        cr.validarVistaPrevia(this.datos.alias);
        
    });  
});