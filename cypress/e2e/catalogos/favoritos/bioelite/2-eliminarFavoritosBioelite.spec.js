import loginPage from "../../../login/loginPage"
import favoritosPage from "../favoritosPage"

describe("Catalogo Bioelite", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Validar se pueda eliminar favoritos de Bioelite", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonBioelite();
        catalogos.buscarProducto(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP);
        catalogos.botonEliminarFavorito(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP);
        catalogos.botonAceptar();
        catalogos.botonInicio();
        catalogos.botonMisFavoritos();
        catalogos.botonEliminarFavorito(this.datos.productoBioelite2+"   "+this.datos.productoBioelite2CAP);
        catalogos.botonAceptar()

        //Validacion
        cy.contains((this.datos.productoBioelite1+" "+this.datos.productoBioelite1CAP).toUpperCase()).should("not.exist");
        cy.contains((this.datos.productoBioelite2+" "+this.datos.productoBioelite2CAP).toUpperCase()).should("not.exist");
    });  
});