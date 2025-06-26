import loginPage from "../../login/loginPage"
import perfilPage from "../perfilPage"
import direccionEntregaPage from "./direccionEntregaPage";

describe("Direccion de entrega", function (){
    const perfil = new perfilPage();
    const direccionEntrega = new direccionEntregaPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoDireccion_entrega/data_direccion_Entrega').then(function (data) { this.datos = data });
    });
    it("Validar que se pueda eliminar la nueva direccion en direccion de entrega", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonDireccionesEntrega();
        direccionEntrega.botonEliminarDireccion(this.datos.alias);
        perfil.botonAceptar();

        //Validacion
        cy.contains("La dirección de entrega fue eliminada con éxito").should("exist");
    });  
});