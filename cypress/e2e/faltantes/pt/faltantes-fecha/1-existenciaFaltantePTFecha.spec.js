import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"


describe("Inventario PT", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Validar que no exista faltante 'REVE 2' con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonProductoTerminado();
        faltante.eliminarExistencia(this.datos.productoTerminado);
        
        //Validacion
        cy.contains(this.datos.productoTerminado).should("not.exist");

    });  
});