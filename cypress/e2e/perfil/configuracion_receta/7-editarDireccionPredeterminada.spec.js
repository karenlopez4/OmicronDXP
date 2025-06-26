
import perfilPage from "../perfilPage"
import crPage from "./crPage";
import loginPage from "../../login/loginPage"

describe("Configuracion de receta", function (){
    const perfil = new perfilPage();
    const cr = new crPage();
    const log = new loginPage();
    before(function () {
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoConfiguracion_receta/data_receta').then(function (data) { this.datos = data });
    });
    it("Validar que se pueda editar la direccion predeterminada en configuracion de receta", function(){
        
        log.login(this.login.url, this.login.correo, this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonConfigReceta();
        cr.botonEditarDireccionPredeterminada();
        cr.datosEditarDireccionCR();
        perfil.botonGuardar();

        //Validacion
        cy.contains("Actualización exitosa").should("exist");
    });  
});
