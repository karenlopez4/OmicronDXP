import loginPage from "../login/loginPage"
import recetaPage from "../receta/recetaPage"
import favoritosPage from "../catalogos/favoritos/favoritosPage"
import carritoPage from "../carrito/carritoPage"
import agregarProductos from "./agregarProductos"
describe("Receta", function (){
    const receta = new recetaPage();
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    const productos = new agregarProductos();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoReceta/data_Receta').then(function (data) { this.datos = data });
    });
    it("Agregar productos para flujo de receta", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);
        
        catalogos.botonCatalogos();
        catalogos.botonDermazone();
        productos.productoMagistralBioelite(this.datos.producto1,this.datos.presentacionProducto1,this.datos.piezas[0]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]}`);
        productos.productoMagistralEnvase(this.datos.producto2,this.datos.presentacionProducto2,this.datos.piezas[1],this.datos.envase2);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]}`);
        

        catalogos.botonInicio();
        catalogos.botonCatalogos();
        catalogos.botonDermazone();        
        productos.agregarProducto(this.datos.producto3,this.datos.piezas[2]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]}`);
        productos.agregarProducto(this.datos.producto4,this.datos.piezas[3]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]}`);
        
        catalogos.botonInicio()
        catalogos.botonCatalogos();
        catalogos.botonReve();
        productos.agregarProducto(this.datos.producto5,this.datos.piezas[4]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]}`);
        productos.agregarProducto(this.datos.producto6,this.datos.piezas[5]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]}`);
        
        catalogos.botonInicio();
        catalogos.botonCatalogos();
        catalogos.botonBioequal();

        productos.agregarProducto(this.datos.producto7,this.datos.piezas[6]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]}`);
        
        productos.agregarProducto(this.datos.producto8,this.datos.piezas[7]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]+this.datos.piezas[7]}`);
        
        productos.agregarProducto(this.datos.producto9,this.datos.piezas[8]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]+this.datos.piezas[7]+this.datos.piezas[8]}`);
        
        productos.agregarProducto(this.datos.producto10,this.datos.piezas[9]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]+this.datos.piezas[7]+this.datos.piezas[8]+this.datos.piezas[9]}`);
        
        catalogos.botonInicio();
        catalogos.botonCatalogos();
        catalogos.botonBioelite();

        productos.productoMagistralBioelite(this.datos.producto11,this.datos.presentacionProducto11,this.datos.piezas[10]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]+this.datos.piezas[7]+this.datos.piezas[8]+this.datos.piezas[9]+this.datos.piezas[10]}`);

        productos.productoMagistralBioelite(this.datos.producto12,this.datos.presentacionProducto12,this.datos.piezas[11]);
        //Validacion
        cy.get(`div[id="btn-shopping-cart"]`).find('p').should('have.text', `${this.datos.piezas[0]+this.datos.piezas[1]+this.datos.piezas[2]+this.datos.piezas[3]+this.datos.piezas[4]+this.datos.piezas[5]+this.datos.piezas[6]+this.datos.piezas[7]+this.datos.piezas[8]+this.datos.piezas[9]+this.datos.piezas[10]+this.datos.piezas[11]}`);
        
        carrito.botonCarritoHeader();
        
        var subtotal = 0, total = 0, a, b;
        for(var i = 0; i < 12; i++){
            total += (this.datos.precios[i]*this.datos.piezas[i]);
        }
        a = parseFloat(receta.obtenerIVAEnvase(this.datos.costoEnvase2));
        b = parseFloat(receta.obtenerIVAReve(this.datos.piezas[4],this.datos.piezas[5],this.datos.precios[4],this.datos.precios[5]));
        subtotal = (total + this.datos.costoEnvase2) - (a+b).toFixed(2);
        //Validacion precios
        cy.get(`app-totals-description`).find('div[id="total"]').should('have.text', " $" + receta.formato(total + this.datos.costoEnvase2) + " ");
        cy.get(`app-totals-description`).find('div[id="subtotal"]').should('have.text', " $" + receta.formato(subtotal) + " ");
        
        cy.get(`app-totals-description`).find('div[id="tax"]').should('have.text', " $" + (a+b).toFixed(2) + " ");
        
    });  
});