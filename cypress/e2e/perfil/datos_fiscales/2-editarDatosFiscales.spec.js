import loginPage from "../../login/loginPage"
import perfilPage from "../perfilPage"
import datosFiscalesPage from "./datosFiscalesPage";

describe("Datos fiscales", function (){
    const perfil = new perfilPage();
    const datosFiscales = new datosFiscalesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoDatos_fiscales/data_Fiscales').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan editar los nuevos datos fiscales", function(){

        log.login(this.login.url,this.login.correo,this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonDatosFiscales();
        datosFiscales.botonEditarDatosFiscales(this.datos.razonSocial);
        datosFiscales.editarDatosFiscales();
        datosFiscales.botonGuardarDatos();

        //Validacion
        cy.contains("Los datos fiscales se agregaron con éxito").should("exist");


    });  
});