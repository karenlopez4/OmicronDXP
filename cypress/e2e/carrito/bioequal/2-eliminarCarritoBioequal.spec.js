import loginPage from "../../login/loginPage"
import favoritosPage from "../../catalogos/favoritos/favoritosPage"
import carritoPage from "../carritoPage"

describe("Carrito Bioequal", function (){
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCarritoCompra/data_Carrito').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan eliminar productos de Bioequal en el carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();
        carrito.botonElimar(this.datos.productoBioequal1);
        carrito.botonAceptar();
        carrito.botonElimar(this.datos.productoBioequal2);
        carrito.botonAceptar();
        carrito.botonCarritoHeader();
        carrito.botonElimar(this.datos.productoBioequal3);
        carrito.botonAceptar();
        carrito.botonElimar(this.datos.productoBioequal4);
        carrito.botonAceptar();
        //Validacion
        cy.contains(this.datos.productoBioequal1).should("not.exist");
        cy.contains(this.datos.productoBioequal2).should("not.exist");
        cy.contains(this.datos.productoBioequal3).should("not.exist");
        cy.contains(this.datos.productoBioequal4).should("not.exist");
    });  
});