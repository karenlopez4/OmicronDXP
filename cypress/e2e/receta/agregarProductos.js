
import recetaPage from "../receta/recetaPage"
import favoritosPage from "../catalogos/favoritos/favoritosPage"
import carritoPage from "../carrito/carritoPage"

const receta = new recetaPage();
const catalogos = new favoritosPage();
const carrito = new carritoPage();
class agregarProductos{



    productoMagistralBioelite(producto, presentacion, piezas){
        catalogos.seleccionarPresentacion(presentacion);
        catalogos.buscarProducto(producto);
        carrito.botonCarrito(producto + "   " + presentacion);
        carrito.agregarPiezas(piezas);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        catalogos.botonLimpiar();
    };
    productoMagistralEnvase(producto, presentacion, piezas,envase){
        catalogos.seleccionarPresentacion(presentacion);
        catalogos.buscarProducto(producto);
        catalogos.seleccionarEnvase(producto+"   "+presentacion,envase);
        carrito.botonAceptarEnvase();
        carrito.botonCarrito(producto + "   " + presentacion);
        carrito.agregarPiezas(piezas);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        catalogos.botonLimpiar();
    };

    agregarProducto(producto,piezas){
        catalogos.buscarProducto(producto);
        carrito.botonCarrito(producto);
        carrito.agregarPiezas(piezas);
        carrito.aceptarCarrito();
        catalogos.botonAceptar();
        catalogos.botonLimpiar();
    };

    


};

export default agregarProductos;