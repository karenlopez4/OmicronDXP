import loginPage from "../login/loginPage"
import carritoPage from "./carritoPage"

describe("Carrito", function (){
    const log = new loginPage();
    const carrito = new carritoPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCatalogos_favoritos/data_favoritos').then(function (data) { this.datos = data });
    });
    it("Eliminar todos los productos del carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();
        carrito.eliminarCarritoCompleto();
        
        //Validacion
        cy.contains("Tu carrito está vacío en este momento").should("exist");
    });  
});