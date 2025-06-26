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
    it("Validar que se puedan agregar productos de Bioelite al carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonBioelite();
        catalogos.seleccionarPresentacion(this.datos.productoBioelite1CAP);
        catalogos.buscarProducto(this.datos.productoBioelite1);
        carrito.botonCarrito(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP);
        carrito.agregarPiezas(this.datos.piezasBioelite1);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioelite1}`);

        catalogos.botonLimpiar();
        catalogos.seleccionarPresentacion(this.datos.productoBioelite2CAP);
        catalogos.buscarProducto(this.datos.productoBioelite2);
        carrito.botonCarrito(this.datos.productoBioelite2+"   "+this.datos.productoBioelite2CAP);
        carrito.agregarPiezas(this.datos.piezasBioelite2);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioelite1+this.datos.piezasBioelite2}`);
        
        carrito.botonCarritoHeader();
        //Validacion de piezas
        cy.get(`app-counter-pieces[id="pieces-${(this.datos.productoBioelite1+"   "+this.datos.productoBioelite1CAP).toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioelite1}`);
        cy.get(`app-counter-pieces[id="pieces-${(this.datos.productoBioelite2+"   "+this.datos.productoBioelite2CAP).toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioelite2}`);
        //Validacion de costos
        cy.get(`app-totals-description`).find('div[id="total"]').should('have.text', " $"+`${carrito.validarCosto2Productos(this.datos.piezasBioelite1,this.datos.piezasBioelite2,this.datos.costoBioelite1,this.datos.costoBioelite2)}`+" "); 
    });  
});