import loginPage from "../../login/loginPage"
import favoritosPage from "../../catalogos/favoritos/favoritosPage"
import carritoPage from "../carritoPage"

describe("Carrito Reve", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCarritoCompra/data_Carrito').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan eliminar productos de Reve del carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();
        carrito.botonElimar(this.datos.productoReve1);
        carrito.botonAceptar();
        carrito.botonElimar(this.datos.productoReve2);
        carrito.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoReve1).should("not.exist");
        cy.contains(this.datos.productoReve2).should("not.exist");

    });  
});