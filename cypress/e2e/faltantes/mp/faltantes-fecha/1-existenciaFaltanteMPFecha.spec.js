import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"
describe("Inventario MP", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Validar existencia de faltante 'MP-093' y 'MP-232 con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.eliminarExistenciaMP(this.datos.producto1MP,this.datos.producto1Descripcion);
        faltante.eliminarExistenciaMP(this.datos.producto2MP,this.datos.producto2Descripcion);
        //Validacion
        cy.contains(this.datos.producto1MP).should("not.exist");
        cy.contains(this.datos.producto2MP).should("not.exist");
    });  
});