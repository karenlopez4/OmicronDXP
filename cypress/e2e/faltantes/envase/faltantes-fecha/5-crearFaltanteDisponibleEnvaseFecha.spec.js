import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"


describe("Inventario envase", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Crear existencia de faltante 'POMADERA 60mL' disponible con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonEnvase();
        faltante.botonAgregarFaltante();
        faltante.datosFaltanteEnvaseFecha(this.datos.productoEnvase);
        faltante.botonDisponible();
        faltante.botonGuardar();
        faltante.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoEnvase).should("exist");
    });  
});