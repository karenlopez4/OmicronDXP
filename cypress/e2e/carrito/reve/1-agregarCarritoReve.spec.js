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
    it("Validar que se puedan agregar productos de Reve al carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonReve();

        catalogos.buscarProducto(this.datos.productoReve1);
        carrito.botonCarrito(this.datos.productoReve1);
        carrito.agregarPiezas(this.datos.piezasReve1);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasReve1}`);

        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoReve2);
        carrito.botonCarrito(this.datos.productoReve2);
        carrito.agregarPiezas(this.datos.piezasReve2);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasReve1+this.datos.piezasReve2}`);
        
        carrito.botonCarritoHeader();
        //Validacion de piezas
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoReve1.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasReve1}`);
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoReve2.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasReve2}`);
        //Validacion de costos
        cy.get(`app-totals-description`).find('div[id="subtotal"]').should('have.text', " $"+`${carrito.validarSubtotal(this.datos.piezasReve1,this.datos.piezasReve2,this.datos.costoReve1,this.datos.costoReve2)}`+" "); 
        cy.get(`app-totals-description`).find('div[id="total"]').should('have.text', " $"+`${carrito.validarCosto2ProductosIVA(this.datos.piezasReve1,this.datos.piezasReve2,this.datos.costoReve1,this.datos.costoReve2)}`+" "); 
    });  
});