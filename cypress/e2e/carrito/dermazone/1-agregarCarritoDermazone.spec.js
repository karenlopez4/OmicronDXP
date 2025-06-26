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
    it("Validar que se puedan agregar productos de Dermazone al carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonDermazone();

        catalogos.buscarProducto(this.datos.productoDermazone1);
        carrito.botonCarrito(this.datos.productoDermazone1);
        carrito.agregarPiezas(this.datos.piezasDermazone1);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasDermazone1}`);

        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoDermazone2);
        carrito.botonCarrito(this.datos.productoDermazone2);
        carrito.agregarPiezas(this.datos.piezasDermazone2);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasDermazone1+this.datos.piezasDermazone2}`);
        
        carrito.botonCarritoHeader();
        //Validacion de piezas
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoDermazone1.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasDermazone1}`);
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoDermazone2.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasDermazone2}`);
        //Validacion de costos
        cy.get(`app-totals-description`).find('div[id="total"]').should('have.text', " $"+`${carrito.validarCosto2Productos(this.datos.piezasDermazone1,this.datos.piezasDermazone2,this.datos.costoDermazone1,this.datos.costoDermazone2)}`+" "); 
    });  
});