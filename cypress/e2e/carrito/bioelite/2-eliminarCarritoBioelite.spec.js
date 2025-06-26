import loginPage from "../../login/loginPage"
import favoritosPage from "../../catalogos/favoritos/favoritosPage"
import carritoPage from "../carritoPage"

describe("Carrito Bioelite", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCarritoCompra/data_Carrito').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan eliminar productos de Bioelite en el carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();
        carrito.botonElimar(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP);
        carrito.botonAceptar();
        carrito.botonElimar(this.datos.productoBioelite2+"   "+this.datos.productoBioelite2CAP);
        carrito.botonAceptar();
        //Validacion
        cy.contains((this.datos.productoBioelite1+" "+this.datos.productoBioelite1CAP).toUpperCase()).should("not.exist");
        cy.contains((this.datos.productoBioelite2+" "+this.datos.productoBioelite2CAP).toUpperCase()).should("not.exist");

    });  
});