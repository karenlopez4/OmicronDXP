import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"

describe("Inventario envase", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Crear faltante 'POMADERA 60mL'", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonEnvase();
        faltante.botonAgregarFaltante();
        faltante.datosFaltanteEnvase(this.datos.productoEnvase);
        faltante.botonGuardar();
        faltante.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoEnvase).should("exist");
    });  
});