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
    it("Validar que se puedan agregar productos de Bioequal al carrito", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);


        catalogos.botonCatalogos();
        catalogos.botonBioequal();

        catalogos.buscarProducto(this.datos.productoBioequal1);
        carrito.botonCarrito(this.datos.productoBioequal1);
        carrito.agregarPiezas(this.datos.piezasBioequal1);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioequal1}`);
        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoBioequal2);
        carrito.botonCarrito(this.datos.productoBioequal2);
        carrito.agregarPiezas(this.datos.piezasBioequal2);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioequal1+this.datos.piezasBioequal2}`);
        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoBioequal3);
        carrito.botonCarrito(this.datos.productoBioequal3);
        carrito.agregarPiezas(this.datos.piezasBioequal3);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioequal1+this.datos.piezasBioequal2+this.datos.piezasBioequal3}`);
        catalogos.botonLimpiar();
        catalogos.buscarProducto(this.datos.productoBioequal4);
        carrito.botonCarrito(this.datos.productoBioequal4);
        carrito.agregarPiezas(this.datos.piezasBioequal4);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasBioequal1+this.datos.piezasBioequal2+this.datos.piezasBioequal3+this.datos.piezasBioequal4}`);
        carrito.botonCarritoHeader();
        //Validacion de piezas
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoBioequal1.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioequal1}`);
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoBioequal2.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioequal2}`);
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoBioequal3.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioequal3}`);
        cy.get(`app-counter-pieces[id="pieces-${this.datos.productoBioequal4.toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasBioequal4}`);
        //Validacion de costos
        cy.get(`app-totals-description`)
            .find('div[id="total"]')
            .first()
            .children()
            .next()
            .should('have.text', " $"+`${carrito.validarCosto4Productos(this.datos.piezasBioequal1,this.datos.piezasBioequal2,this.datos.piezasBioequal3,this.datos.piezasBioequal4,this.datos.costoBioequal1,this.datos.costoBioequal2,this.datos.costoBioequal3,this.datos.costoBioequal4)}`+" "); 
    });  
});