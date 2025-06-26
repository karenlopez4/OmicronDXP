import loginPage from "../../../login/loginPage"
import favoritosPage from "../favoritosPage"

describe("Catalogo Dermazone", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Validar se pueda eliminar favoritos de Dermazone", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonDermazone();
        catalogos.buscarProducto(this.datos.productoDermazone1);
        catalogos.botonEliminarFavorito(this.datos.productoDermazone1);
        catalogos.botonAceptar();
        catalogos.botonInicio();
        catalogos.botonMisFavoritos();
        catalogos.botonEliminarFavorito(this.datos.productoDermazone2);
        catalogos.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoDermazone1.toUpperCase()).should("not.exist");
        cy.contains(this.datos.productoDermazone2.toUpperCase()).should("not.exist");

    });  
});