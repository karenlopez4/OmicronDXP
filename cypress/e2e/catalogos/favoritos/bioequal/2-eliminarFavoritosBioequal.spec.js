import loginPage from "../../../login/loginPage"
import favoritosPage from "../favoritosPage"

describe("Catalogo Bioequal", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Validar se pueda eliminar favoritos de Bioequal", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonBioequal();
        catalogos.buscarProducto(this.datos.productoBioequal1);
        catalogos.botonEliminarFavorito(this.datos.productoBioequal1);
        catalogos.botonAceptar();
        catalogos.botonInicio();
        catalogos.botonMisFavoritos();
        catalogos.botonEliminarFavorito(this.datos.productoBioequal2);
        catalogos.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoBioequal1.toUpperCase()).should("not.exist");
        cy.contains(this.datos.productoBioequal2.toUpperCase()).should("not.exist");

    });  
});