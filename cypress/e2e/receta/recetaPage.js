
class paginaFaltantes{

    obtenerIVAReve(piezas1,piezas2,costo1,costo2){
        var SinIVA1 =  Math.round((((parseFloat(costo1)/parseFloat(parseInt(1)+16/100)*piezas1)) + Number.EPSILON) * 100) / 100;
        var SinIVA2 =  Math.round((((parseFloat(costo2)/parseFloat(parseInt(1)+16/100)*piezas2)) + Number.EPSILON) * 100) / 100;
        
        var total1 = (piezas1*costo1) - SinIVA1;
        var total2 = (piezas2*costo2) - SinIVA2;


        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(total1+total2);
    }

    obtenerIVAEnvase(envase){
        var SinIVA1 =  Math.round(((parseFloat(envase)/parseFloat(parseInt(1)+16/100)) + Number.EPSILON) * 100) / 100;
        var total1 = envase - SinIVA1;
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(total1);
    }

    formato(numero){
        return new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(numero);
    }

    botonContinuar(){
        cy.get('button[name="btn-continue"]').click();
    }

    botonContinuarEntrega(){
        cy.get('button[name="btn-continue-delivery"]').click();
    }
    botonContinuarDireccion(){
        cy.get('button[name="btn-continue-direction"]').click();
    }
    botonContinuarPago(){
        cy.get('button[name="btn-continue-payment"]').click();
    }
    botonPersonalizarReceta(){
        cy.get('div[id="btn-custom"]"]').click();
    }
    botonOxxo(){
        cy.get('div[id="cash_payment"]').click();
    }

    ingresarDatos(){
        cy.get('div[id="description-bqr 09"]').type("Prueba de automatizacion");
        cy.get('div[id="description-bqr 11"]').type("Prueba de automatizacion");
        cy.get('div[id="patient-name-bqr 09"]').find('input').type("Nombre de paciente automatizacion");
        cy.get('div[id="patient-name-bqr 11"]').find('input').type("Nombre de paciente automatizacion");
        cy.get('div[id="patient-name-bqr 53"]').find('input').type("Nombre de paciente automatizacion");
    }

    botonContinuarReceta(){
        cy.get('button[name="btn-continue-recipe"]"]').click();
    }

    botonContinuarReceta(){
        cy.get('button[name="btn-confirm-recipe"]"]').click();
    }
    botonContinuarOrden(){
        cy.get('button[name="btn-continue-order"]"]').click();
    }
    botonConfirmarPago(){
        cy.get('button[name="btn-confirm-order"]"]').click();
    }
    botonIrAPedidos(){
        cy.get('button[name="btn-orders"]"]').click();
    }

    botonPedidosActivos(){
        cy.get('button[name="btn-active-orders"]"]').click();
    }
    
    botonVistaPrevia(){
        cy.get('button[id="btn-preview"]"]').click();
    }
}

export default paginaFaltantes;