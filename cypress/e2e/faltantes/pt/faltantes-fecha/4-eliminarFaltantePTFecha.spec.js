import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"
import catalogoPage from "../../../catalogos/favoritos/favoritosPage"

describe("Inventario PT", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    const catalogo = new catalogoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Eliminar existencia de faltante 'REVE 2' con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonProductoTerminado();
        faltante.eliminarExistencia(this.datos.productoTerminado);
        //Validacion
        cy.contains(this.datos.productoTerminado).should("not.exist");
        
        log.logout();
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        catalogo.botonCatalogos();
        catalogo.botonReve();
        catalogo.buscarProducto(this.datos.productoTerminado);
        //Validacion
        faltante.validarNoFaltanteProductoTerminadoFecha();
        
    });  
});