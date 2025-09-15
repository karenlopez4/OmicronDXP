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
        debugger;
        perfil.botonPerfil();
        perfil.botonDireccionesEntrega();
        direccionEntrega.seleccionarTabDireccionEntregaMedico();
        direccionEntrega.botonAgregarDireccionEntrega();
        direccionEntrega.datosDireccionEntrega(this.datos.alias,this.datos.nombrePersona,this.datos.calle,this.datos.telefono,this.datos.establecimiento,this.datos.entrecalles,this.datos.referenciasDireccion);
        perfil.botonGuardar();     
           // 1. Esperar opcionalmente a que aparezca el spinner (si puede tardar en cargar)
cy.get('.la-ball-clip-rotate-pulse', { timeout: 10000 }).should('exist');
// 2. Esperar a que desaparezca el spinner
cy.get('.la-ball-clip-rotate-pulse', { timeout: 20000 }).should('not.exist');
         cy.contains('span', 'La dirección de entrega se agregó con éxito')
       .should('exist');
        cy.get('button[name="btn-accept"]').click();
    });  
});