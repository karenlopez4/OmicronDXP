import loginPage from "../../../login/loginPage"
import faltantesPage from "../../faltantesPage"
import catalogoPage from "../../../catalogos/favoritos/favoritosPage"

describe("Inventario MP", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    const catalogo = new catalogoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoFaltantes/data_faltantes').then(function (data) { this.datos = data });
    });
    it("Eliminar faltantes disponibles 'MP-093' y 'MP-232 con fecha asignada", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);
        faltante.botonEliminarFaltante(this.datos.producto1MP);
        faltante.botonAceptar();
        cy.wait(1000);
        faltante.botonAceptar();
        faltante.botonEliminarFaltante(this.datos.producto2MP);
        faltante.botonAceptar();
        cy.wait(1000);
        faltante.botonAceptar();
        //Validacion
        cy.contains(this.datos.producto1MP).should("not.exist");
        cy.contains(this.datos.producto2MP).should("not.exist");  
        
        log.logout();
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        catalogo.botonCatalogos();
        catalogo.botonDermazone();
        catalogo.buscarProductoPrincipioActivo(this.datos.producto1Descripcion);
        catalogo.buscarProductoPrincipioActivo(this.datos.producto2Descripcion);
        //Validacion
        faltante.validarNoFaltanteMateriaPrimaFecha(this.datos.producto1Descripcion,this.datos.producto2Descripcion);


    });  
});