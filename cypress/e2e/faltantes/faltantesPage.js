const fecha = new Date();
const month = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov", "Dic."];
class paginaFaltantes {

    eliminarExistenciaMP(producto, descripcion) {
        cy.wait(2000);
        cy.get('app-list-missing-products').then(($ele) => {
            
            if($ele.find('app-content-empty').length > 0){
                cy.log("Vacio");
            }else{
                cy.get('div[id="container-elements"]').then(($ele2) => {
                    cy.get('div[id="container-elements"]').children().then($li => {
                        var n = $li.length;
                        if (n >= 10) {
                            cy.get('div[id="container-elements"]').children().eq(9).click();
                            if ($ele2.find(`app-missing-product-item[id="container-missing-${descripcion.toLowerCase()}"]`).length > 0) {
                                cy.get(`img[id="btn-missing-${producto.toLowerCase()}-delete"]`).click();
                                this.botonAceptar();
                                cy.wait(2000);
                                this.botonAceptar();
                            }
                        } else {
                            if ($ele2.find(`app-missing-product-item[id="container-missing-${descripcion.toLowerCase()}"]`).length > 0) {
                                cy.get(`img[id="btn-missing-${producto.toLowerCase()}-delete"]`).click();
                                this.botonAceptar();
                                cy.wait(2000);
                                this.botonAceptar();
                            }
                        }
        
                    });
        
                });
            }      
        });
    }
    eliminarExistencia(producto) {
        cy.wait(2000);
        cy.get('app-list-missing-products').then(($ele) => {
            
            if($ele.find('app-content-empty').length > 0){
                cy.log("Vacio");
            }else{
                cy.get('div[id="container-elements"]').then(($ele2) => {
                    cy.get('div[id="container-elements"]').children().then($li => {
                        var n = $li.length;
                        if (n >= 10) {
                            cy.get('div[id="container-elements"]').children().eq(9).click();
                            if ($ele2.find(`app-missing-product-item[id="container-missing-${producto.toLowerCase()}"]`).length > 0) {
                                cy.get(`img[id="btn-missing-${producto.toLowerCase()}-delete"]`).click();
                                this.botonAceptar();
                                cy.wait(2000);
                                this.botonAceptar();
                            }
                        } else {
                            if ($ele2.find(`app-missing-product-item[id="container-missing-${producto.toLowerCase()}"]`).length > 0) {
                                cy.get(`img[id="btn-missing-${producto.toLowerCase()}-delete"]`).click();
                                this.botonAceptar();
                                cy.wait(2000);
                                this.botonAceptar();
                            }
                        }
        
                    });
        
                });
            }
        });
    }

    botonAgregarFaltante() {
        cy.get('button[name="btn-add-missing"]').click();
    }

    datosFaltanteMateriaPrimaFecha(producto) {
        cy.get('input[formcontrolname="rawMaterial"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-datepicker-toggle[id="btn-date"]').click();
        cy.get('div').contains(fecha.getDate() + 1).click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltantePrincipioActivoFecha(producto) {
        cy.get('input[formcontrolname="activePrinciple"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-datepicker-toggle[id="btn-date"]').click();
        cy.get('div').contains(fecha.getDate() + 1).click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltanteEnvaseFecha(producto) {
        cy.get('input[formcontrolname="container"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-datepicker-toggle[id="btn-date"]').click();
        cy.get('div').contains(fecha.getDate() + 1).click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltanteProductoTerminadoFecha(producto) {
        cy.get('input[formcontrolname="itemCode"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-datepicker-toggle[id="btn-date"]').click();
        cy.get('div').contains(fecha.getDate() + 1).click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    //---------------------------------------------------------------------------------------------------
    datosFaltanteMateriaPrima(producto) {
        cy.get('input[formcontrolname="rawMaterial"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-checkbox[formcontrolname="checkValue"]').click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltantePrincipioActivo(producto) {
        cy.get('input[formcontrolname="activePrinciple"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-checkbox[formcontrolname="checkValue"]').click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltanteEnvase(producto) {
        cy.get('input[formcontrolname="container"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-checkbox[formcontrolname="checkValue"]').click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }
    datosFaltanteProductoTerminado(producto) {
        cy.get('input[formcontrolname="itemCode"]').clear().type(producto);
        cy.contains(` ${producto} `).click();
        cy.get('mat-checkbox[formcontrolname="checkValue"]').click();
        cy.get('textarea[formcontrolname="comments"]').clear().type("Prueba automatizacion");
    }

    botonGuardar() {
        cy.get('button[name="btn-save-product"]').click();
    }

    botonEliminarFaltante(producto) {
        cy.get(`img[id="btn-missing-${producto.toLowerCase()}-delete"]`).click();
    }
    botonDisponible() {
        cy.get('mat-slide-toggle[name="btn-avalaible"]').click();
    }
    botonEnvase() {
        cy.get('#mat-tab-label-0-1').click();
    }
    botonProductoTerminado() {
        cy.get('#mat-tab-label-0-2').click();
    }
    botonAceptar() {
        cy.get('button[name="btn-accept"]').click();
    }
    validarFaltanteEnvaseFecha() {
        cy.wait(2000);
        //Validacion
        cy.contains(`Envase disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("exist");
    }
    validarNoFaltanteEnvaseFecha() {
        cy.wait(2000);
        //Validacion
        cy.contains(`Envase disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("not.exist");
    }
    validarFaltanteMateriaPrimaFecha(producto1, producto2) {
        cy.wait(2000);
        //Validacion
        cy.contains(`${producto1}, ${producto2} disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("exist");
    }
    validarNoFaltanteMateriaPrimaFecha(producto1, producto2) {
        cy.wait(2000);
        //Validacion
        cy.contains(`${producto1}, ${producto2} disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("not.exist");
    }
    validarFaltanteProductoTerminadoFecha() {
        cy.wait(2000);
        //Validacion
        cy.contains(`Producto disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("exist");
    }
    validarNoFaltanteProductoTerminadoFecha() {
        cy.wait(2000);
        //Validacion
        cy.contains(`Producto disponible apróx. a partir del ${fecha.getDate() + 1} ${month[fecha.getMonth()]}`).should("not.exist");
    }


}

export default paginaFaltantes;