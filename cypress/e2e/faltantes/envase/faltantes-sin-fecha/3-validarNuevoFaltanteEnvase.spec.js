import loginPage from "../../../login/loginPage"
import catalogoPage from "../../../catalogos/favoritos/favoritosPage"
import faltantesPage from "../../faltantesPage"

describe("Inventario envase", function (){
    const catalogo = new catalogoPage();
    const log = new loginPage();
    const faltante = new faltantesPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Validar existencia de faltante 'POMADERA 60mL' en catalogo", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        catalogo.botonCatalogos();
        catalogo.botonDermazone();
        catalogo.buscarProducto(this.datos.codigoEnvase);
        
        //Validacion
        cy.contains(`Envase no disponible temporalmente`).should("exist");
        
    });  
});