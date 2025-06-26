var codigos = ['03820', '03240', '03230', '03400', '03560', '03610', '03840', '03010', '03710', '03940', '03540', '03640', '03100',
    '03103', '03104', '03590', '03720', '03620', '03000', '03303', '03570', '03300', '03410', '03320', '03900', '03730', '03800',
    '03660', '03310', '03700', '03200', '03600', '03530', '03330', '03550'];
    
class crPage {

    botonAgregarConfiguracion(){
        cy.get('div[id="btn-add-prescription-config"]').click();
    };
    
    datosDireccionCR(alias, calle, telefono) {
        cy.get('input[formcontrolname="aliasDirection"]').clear().type(alias).blur();
        cy.get('input[formcontrolname="PostalCode"]').clear().type(codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)]).blur();
        cy.get('mat-select[formcontrolname="Municipality"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="Neighborhood"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="Street"]').clear().type(calle).blur();
        cy.get('input[formcontrolname="Number"]').clear().type(Math.floor(Math.random() * (75 - 25 + 1)) + 25).blur();
        cy.get('input[formcontrolname="Telephone"]').clear().type(telefono).blur();  
    };

    datosEditarDireccionCR() {
        cy.get('input[formcontrolname="PostalCode"]').clear().type(codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)]).blur();
        cy.get('mat-select[formcontrolname="Municipality"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="Neighborhood"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="Street"]').click().type(' edit').blur();
        cy.get('input[formcontrolname="Number"]').clear().type(Math.floor(Math.random() * (75 - 25 + 1)) + 25).blur();
        cy.get('input[formcontrolname="Telephone"]').clear().type(Math.floor(Math.random() * (9000000000 - 1000000000 + 1000000000) + 1000000000)).blur();
    };

    editarDireccion(alias) {
        cy.get(`p[id="btn-${alias.toLowerCase()}-edit"]`).click();
    };

    botonCambioDireccionCR() {
        cy.get('app-add-default-address[id="btn-use-address"]').first().click();
    };

    botonVistaPreviaCR() {
        cy.get('button[name="btn-prescription-preview"]').click();    
    }

    validarVistaPrevia(alias){
        cy.get(`span[id="street-${alias.toUpperCase()}"]`).then($direccion => {
            let calle = $direccion.text();
            let calle2 = calle.replace(',', '');
            cy.get(`span[id="street-number-${alias.toUpperCase()}"]`).then($direccion => {
                var numero = $direccion.text();
                cy.get(`span[id="suburb-${alias.toUpperCase()}"]`).then($direccion => {
                    var colonia = $direccion.text();
                    var colonia2 = colonia.slice(0, -1);
                    //Validacion
                    cy.wait(10000).contains(calle2 +" "+numero +" "+colonia2 + ",").should('exist');
                });
            });
        });           
    }

    eliminarDireccionCR(alias) {
        cy.get(`app-delete-product[id="btn-${alias.toLowerCase()}-delete"]`).click();
    }


    botonEditarDireccionPredeterminada() {
        //cy.get('p[id="lbl-predetermined"]').siblings().prev().prev();
        cy.get('p[id="lbl-predetermined"]').siblings().first().click();
    }

}

export default crPage;