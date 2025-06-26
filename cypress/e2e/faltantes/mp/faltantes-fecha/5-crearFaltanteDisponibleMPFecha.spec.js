import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"


describe("Inventario MP", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Crear existencia de faltante 'MP-093' y 'MP-232' disponible con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);

        faltante.botonAgregarFaltante();
        faltante.datosFaltantePrincipioActivoFecha(this.datos.producto1Descripcion);
        faltante.botonDisponible();
        faltante.botonGuardar();
        faltante.botonAceptar();
        faltante.botonAgregarFaltante();
        faltante.datosFaltanteMateriaPrimaFecha(this.datos.producto2MP);
        faltante.botonDisponible();
        faltante.botonGuardar();
        faltante.botonAceptar();
        //Validacion
        cy.contains(this.datos.producto1Descripcion).should("exist");
        cy.contains(this.datos.producto2MP).should("exist");
    });  
});