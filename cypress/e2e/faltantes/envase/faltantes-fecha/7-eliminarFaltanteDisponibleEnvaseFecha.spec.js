import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"
import catalogoPage from "../../../catalogos/favoritos/favoritosPage"

describe("Inventario envase", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    const catalogo = new catalogoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Eliminar faltantes disponibles 'POMADERA 60mL' con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonEnvase();
        faltante.eliminarExistencia(this.datos.productoEnvase);
        //Validacion
        cy.contains(this.datos.productoEnvase).should("not.exist");
        
        log.logout();
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        catalogo.botonCatalogos();
        catalogo.botonDermazone();
        catalogo.buscarProducto(this.datos.codigoEnvase);
        faltante.validarNoFaltanteEnvaseFecha();

    });  
});