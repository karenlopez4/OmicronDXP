class paginaCarrito{
    eliminarCarritoCompleto(){  
        cy.wait(2000);
        cy.get('div[class="list-shopping-car"]').then($ele => {
            if ($ele.find(`div[class="shopping-car-container ng-star-inserted"]`).length > 0) {
                cy.wait(1000);
                cy.get('div[class="cards-container"]').children().then($li => {
                    var n = $li.length;
                    if(n >= 10){
                        cy.get('div[id="product-9"]').scrollIntoView().click();
                        cy.wait(1500);
                        cy.get('div[class="cards-container"]').children().then($li => {
                            var n2 = $li.length;
                            for(var i = 0; i < n2; i++){
                                cy.get(`button[name="btn-delete"]`).first().click();
                                this.botonAceptar();
                            }
                        });
                    }else if (n > 0) {
                        cy.get('div[class="cards-container"]').children().then($li => {
                            var n2 = $li.length;
                            for(var i = 0; i < n2; i++){
                                cy.get(`button[name="btn-delete"]`).first().click();
                                this.botonAceptar();
                            }
                        });
                    }
                    
                    
                });
                
            }
        });
    }
    botonAceptar(){
        cy.get('button[name="btn-accept"]').click();
        cy.wait(3000);
    }
    validarCosto2Productos(piezas1,piezas2,costo1,costo2){
        var a = piezas1 * costo1;
        var b = piezas2 * costo2;
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(a+b);
    }
    validarCosto2ProductosIVA(piezas1,piezas2,costo1,costo2){
        var SinIVA1 =  Math.round((((parseFloat(costo1)/parseFloat(parseInt(1)+16/100)*piezas1)) + Number.EPSILON) * 100) / 100;
        var SinIVA2 =  Math.round((((parseFloat(costo2)/parseFloat(parseInt(1)+16/100)*piezas2)) + Number.EPSILON) * 100) / 100;
        var IVATotal = ((Math.round(((SinIVA1+SinIVA2) + Number.EPSILON) * 100) / 100)*0.16);
        var a = Math.round(((SinIVA1+SinIVA2) + Number.EPSILON) * 100) / 100;
        var b = (Math.round(((IVATotal) + Number.EPSILON) * 100) / 100);

        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(a+b);
    }
    validarCosto2ProductosIVAMagistral(piezas1,piezas2,costo1,costo2,costoExtra){
        var SinIVA1 =  Math.round((((parseFloat(costo1)/parseFloat(parseInt(1)+16/100)*piezas1)) + Number.EPSILON) * 100) / 100;
        var SinIVA2 =  Math.round((((parseFloat(costo2)/parseFloat(parseInt(1)+16/100)*piezas2)) + Number.EPSILON) * 100) / 100;
        var IVATotal = ((Math.round(((SinIVA1+SinIVA2) + Number.EPSILON) * 100) / 100)*0.16);
        var a = Math.round(((SinIVA1+SinIVA2) + Number.EPSILON) * 100) / 100;
        var b = (Math.round(((IVATotal) + Number.EPSILON) * 100) / 100);
        var c = costoExtra*piezas2;
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(a+b+c);
    }
    validarSubtotalMagistral(piezas1,piezas2,costo1,costo2,costoExtra){
        var total =  Math.round((((parseFloat(costoExtra)/parseFloat(parseInt(1)+16/100)*piezas2)) + Number.EPSILON) * 100) / 100;
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format((total+(piezas1*costo1)+(piezas2*costo2)));
    }
    validarSubtotal(piezas1,piezas2,costo1,costo2){
        var SinIVA1 =  Math.round((((parseFloat(costo1)/parseFloat(parseInt(1)+16/100)*piezas1)) + Number.EPSILON) * 100) / 100;
        var SinIVA2 =  Math.round((((parseFloat(costo2)/parseFloat(parseInt(1)+16/100)*piezas2)) + Number.EPSILON) * 100) / 100;

        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(SinIVA1+SinIVA2);
    }
    validarCosto4Productos(piezas1,piezas2,piezas3,piezas4,costo1,costo2,costo3,costo4){
        var a = piezas1 * costo1;
        var b = piezas2 * costo2;
        var c = piezas3 * costo3;
        var d = piezas4 * costo4;
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(a+b+c+d);
    }

    botonCarritoHeader(){
        cy.get('div[id="btn-shopping-cart"]').click();
    }
    botonCarrito(producto){
        cy.get(`app-shopping-cart-button[id="btn-${producto.toLowerCase()}-shopping-cart"]`).click();
    };
    agregarPiezas(cantidad){
        cy.get(`input[id="pieces"]`).clear().clear().type(cantidad);
    }
    aceptarCarrito(){
        cy.get('button[name="btn-accept-shopping-cart"]').click();
    }
    botonElimar(producto){
        //cy.get(`div[class="cards-container"]`).scrollTo('bottom', { ensureScrollable: false });
        cy.get(`app-delete-product[id="btn-${producto.toLowerCase()}-delete"]`).scrollIntoView().click();
    }

    botonAceptarEnvase(){
        cy.get('button[type="submit"]').click();
    }





}

export default paginaCarrito;