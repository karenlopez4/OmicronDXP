import loginPage from "../../../login/loginPage"
import catalogoPage from "../../../catalogos/favoritos/favoritosPage"
import faltantesPage from "../../faltantesPage"
describe("Inventario MP", function (){
    const catalogo = new catalogoPage();
    const log = new loginPage();
    const faltante = new faltantesPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Validar existencia de faltante disponible 'MP-093' y 'MP-232' con fecha asignada", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        catalogo.botonCatalogos();
        catalogo.botonDermazone();
        catalogo.buscarProductoPrincipioActivo(this.datos.producto1Descripcion);
        catalogo.buscarProductoPrincipioActivo(this.datos.producto2Descripcion);
        faltante.validarNoFaltanteMateriaPrimaFecha(this.datos.producto1Descripcion,this.datos.producto2Descripcion);

    });  
});