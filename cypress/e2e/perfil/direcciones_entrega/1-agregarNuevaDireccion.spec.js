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
    it("Validar que se pueda agregar una direccion en direccion de entrega", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        perfil.botonPerfil();
        perfil.botonDireccionesEntrega();
        direccionEntrega.botonAgregarDireccionEntrega();
        direccionEntrega.datosDireccionEntrega(this.datos.alias,this.datos.nombrePersona,this.datos.calle,this.datos.telefono,this.datos.establecimiento,this.datos.entrecalles,this.datos.referenciasDireccion);
        perfil.botonGuardar();
        
        //Validacion
        cy.contains("La dirección de entrega se agregó con éxito").should('exist');
    });  
});