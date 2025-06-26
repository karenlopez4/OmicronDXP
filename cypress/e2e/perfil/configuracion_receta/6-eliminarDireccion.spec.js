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
    it("Validar que se pueda eliminar direccion en configuracion de receta", function(){

        log.login(this.login.url, this.login.correo, this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonConfigReceta();
        cr.eliminarDireccionCR(this.datos.alias);
        perfil.botonAceptar();
        //Validacion
        cy.contains("La dirección de receta fue eliminada con éxito").should("exist");

    });  
});