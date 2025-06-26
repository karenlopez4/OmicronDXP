
import perfilPage from "../perfilPage"
import crPage from "./crPage";
import loginPage from "../../login/loginPage"

describe("Configuracion de receta", function () {
    const cr = new crPage();
    const perfil = new perfilPage();
    const log = new loginPage();
    beforeEach(function () {
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoConfiguracion_receta/data_receta').then(function (data) { this.datos = data });
    });
    it("Validar que se pueda cambiar de direccion predeterminada en configuracion de receta", function () {

        log.login(this.login.url, this.login.correo, this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonConfigReceta();
        cr.botonCambioDireccionCR();
        cy.wait(2000);
        //Validar que el marco azul de direccion seleccionada cambie
        cy.get(`div[id="container-${this.datos.alias.toLowerCase()}"]`).children().first().should("have.css","border", "2px solid rgb(220, 220, 220)");
    });


    it("Volver a cambiar de direccion predeterminada a la nueva", function () {
        cr.botonCambioDireccionCR();
        cy.wait(2000);
        cy.get(`div[id="container-${this.datos.alias.toLowerCase()}"]`).children().first().should("have.css","border", "2px solid rgb(0, 112, 183)");
    });


});