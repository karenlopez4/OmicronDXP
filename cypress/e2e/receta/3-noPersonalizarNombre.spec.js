import loginPage from "../login/loginPage"
import recetaPage from "./recetaPage"
import favoritosPage from "../catalogos/favoritos/favoritosPage"
import carritoPage from "../carrito/carritoPage"
describe("Receta", function (){
    const receta = new recetaPage();
    const log = new loginPage();
    const catalogos = new favoritosPage();
    const carrito = new carritoPage();
    
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoReceta/data_Receta').then(function (data) { this.datos = data });
    });
    it("Continuar con la compra y no personalizar nombre en receta", function(){
        log.login(this.login.url,this.login.correo,this.login.contrasena);

        carrito.botonCarritoHeader();

        receta.botonContinuar();
        
        receta.botonContinuarEntrega();
        receta.botonContinuarDireccion();
        receta.botonOxxo();
        receta.botonContinuarPago();
        receta.botonPersonalizarReceta();
        //receta.ingresarDatos();
        receta.botonContinuarOrden();
        //Validacion
        cy.cotains("Ninguno de los nombres de paciente que colocaste aparecerá impreso en el producto.").should("exist");
        receta.botonConfirmarOrden();
        receta.botonConfirmarPago();
        receta.botonVistaPrevia(); 
});  
});