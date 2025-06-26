import loginPage from "../../login/loginPage"
import favoritosPage from "../../catalogos/favoritos/favoritosPage"
import carritoPage from "../carritoPage"

describe("Carrito Dermazone", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCarritoCompra/data_Carrito').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan eliminar productos de Dermazone", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();
        carrito.botonElimar(this.datos.productoDermazone1);
        carrito.botonAceptar();
        carrito.botonElimar(this.datos.productoDermazone2);
        carrito.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoDermazone1).should("not.exist");
        cy.contains(this.datos.productoDermazone2).should("not.exist");

    });  
});