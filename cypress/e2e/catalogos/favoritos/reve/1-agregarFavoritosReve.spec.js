import loginPage from "../../../login/loginPage"
import favoritosPage from "../favoritosPage"

describe("Catalogo Reve", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Validar se pueda agregar 2 favoritos de Reve", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonReve();
        catalogos.buscarProducto(this.datos.productoReve1);
        catalogos.botonFavorito(this.datos.productoReve1);
        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoReve2);
        catalogos.botonFavorito(this.datos.productoReve2);
        catalogos.botonInicio();
        catalogos.botonMisFavoritos();
        
        //Validacion
        cy.contains(this.datos.productoReve1.toUpperCase()).should("exist");
        cy.contains(this.datos.productoReve2.toUpperCase()).should("exist");

    });  
});