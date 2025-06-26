import loginPage from "../../login/loginPage"
import favoritosPage from "../../catalogos/favoritos/favoritosPage"
import carritoPage from "../carritoPage"

describe("Carrito Magistrales", function () {
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    before(function () {
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoCarritoCompra/data_Carrito').then(function (data) { this.datos = data });
    });
    it("Validar que se puedan agregar productos Magistrales al carrito", function () {
        log.login(this.login.url, this.login.correo, this.login.contrasena);

        catalogos.botonCatalogos();
        catalogos.botonDermazone();
        catalogos.seleccionarPresentacion(this.datos.presentacionMagistral1);
        catalogos.buscarProducto(this.datos.productoMagistral1);
        catalogos.seleccionarEtiqueta(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1, this.datos.etiquetaMagistral1);
        catalogos.seleccionarEnvase(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1, this.datos.envaseMagistral1);
        carrito.botonAceptarEnvase();
        carrito.botonCarrito(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1);
        carrito.agregarPiezas(this.datos.piezasMagistral1);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasMagistral1}`);

        catalogos.botonLimpiar();
        catalogos.seleccionarPresentacion(this.datos.presentacionMagistral2);
        catalogos.buscarProducto(this.datos.productoMagistral2);
        catalogos.seleccionarEtiqueta(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2, this.datos.etiquetaMagistral2);
        catalogos.seleccionarEnvase(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2, this.datos.envaseMagistral2);
        carrito.botonAceptarEnvase();
        carrito.botonCarrito(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2);
        carrito.agregarPiezas(this.datos.piezasMagistral2);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezasMagistral1 + this.datos.piezasMagistral2}`);

        carrito.botonCarritoHeader();

        //Cambiar
        //Validacion envase 1
        cy.get(`div[id="container-product-${(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1).toLowerCase()}"]`).find('p').should('have.text', " " + `${this.datos.envaseMagistral1}` + " ");
        //Validacion etiqueta 1
        cy.get(`mat-select[id="label-product-${(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1).toLowerCase()}"]`).find('span').find('span').should('have.text', `${this.datos.etiquetaMagistral1.toUpperCase()}`);
        //Validacion envase 2
        cy.get(`div[id="container-product-${(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2).toLowerCase()}"]`).find('p').should('have.text', " " + `${this.datos.envaseMagistral2}` + "  | " + this.datos.precioEnvase2 + " MXN ");
        //Validacion etiqueta 2
        cy.get(`mat-select[id="label-product-${(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2).toLowerCase()}"]`).find('span').find('span').should('have.text', `${this.datos.etiquetaMagistral2.toUpperCase()}`);
        //Validacion de piezas
        cy.get(`app-counter-pieces[id="pieces-${(this.datos.productoMagistral1 + "   " + this.datos.presentacionMagistral1).toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasMagistral1}`);
        cy.get(`app-counter-pieces[id="pieces-${(this.datos.productoMagistral2 + "   " + this.datos.presentacionMagistral2).toLowerCase()}"]`).find("input").should('have.value', `${this.datos.piezasMagistral2}`);

        //Validacion de costos
        cy.get(`app-totals-description`).find('div[id="total"]').should('have.text', " $" + `${carrito.validarCosto2ProductosIVAMagistral(this.datos.piezasMagistral1, this.datos.piezasMagistral2, this.datos.costoMagistral1, this.datos.costoMagistral2, this.datos.precioEnvase2)}` + " ");
        cy.get(`app-totals-description`).find('div[id="subtotal"]').should('have.text', " $" + `${carrito.validarSubtotalMagistral(this.datos.piezasMagistral1, this.datos.piezasMagistral2, this.datos.costoMagistral1, this.datos.costoMagistral2, this.datos.precioEnvase2)}` + " ");

    });
});


