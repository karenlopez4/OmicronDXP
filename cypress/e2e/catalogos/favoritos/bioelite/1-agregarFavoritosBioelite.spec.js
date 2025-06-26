import loginPage from "../../../login/loginPage"
import favoritosPage from "../favoritosPage"

describe("Catalogo Bioelite", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Validar se pueda agregar 2 favoritos de Bioelite", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonBioelite();
        catalogos.seleccionarPresentacion(this.datos.productoBioelite1CAP);
        catalogos.buscarProducto(this.datos.productoBioelite1);
        catalogos.botonFavorito(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP);
        catalogos.botonLimpiar();
        catalogos.seleccionarPresentacion(this.datos.productoBioelite2CAP);
        catalogos.buscarProducto(this.datos.productoBioelite2);
        catalogos.botonFavorito(this.datos.productoBioelite2+"   "+this.datos.productoBioelite2CAP);
        catalogos.botonInicio();
        catalogos.botonMisFavoritos();
        
        //Validacion
        cy.contains((this.datos.productoBioelite1+" "+this.datos.productoBioelite1CAP).toUpperCase()).should("exist");
        cy.contains((this.datos.productoBioelite2+" "+this.datos.productoBioelite2CAP).toUpperCase()).should("exist");
    });  
});