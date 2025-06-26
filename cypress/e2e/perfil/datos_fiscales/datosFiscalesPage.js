var codigos = ['03820', '03240', '03230', '03400', '03560', '03610', '03840', '03010', '03710', '03940', '03540', '03640', '03100',
    '03103', '03104', '03590', '03720', '03620', '03000', '03303', '03570', '03300', '03410', '03320', '03900', '03730', '03800',
    '03660', '03310', '03700', '03200', '03600', '03530', '03330', '03550'];
class datosFiscalesPage {

    botonAgregarDatosFiscales(){
        cy.get('button[name="btn-add-tax-data"]').click();
    };

    botonGuardarDatos(){
        cy.get('button[name="btn-save-tax-data"]').click();
    };

    datosFiscales(razonSocial, rfc, calle, correoFiscal) {
        cy.get('input[formcontrolname="nickName"]').type(razonSocial);
        cy.get('input[formcontrolname="rfc"]').type(rfc);
        cy.get('input[formcontrolname="zipCode"]').type(codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)]).blur();
        cy.get('mat-select[formcontrolname="country"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="suburb"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="street"]').type(calle);
        cy.get('input[formcontrolname="number"]').type(Math.floor(Math.random() * (75 - 25 + 1)) + 25);
        cy.get('input[formcontrolname="correo"]').clear().type(correoFiscal);
        cy.get('mat-select[formcontrolname="cfdi"]').click();
        cy.get('mat-option[tabindex="0"]').first().click();
    };

    editarDatosFiscales(){
        cy.get('input[formcontrolname="zipCode"]').clear().type(codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)]).blur();
        cy.get('mat-select[formcontrolname="country"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="suburb"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="street"]').click().type(" edit");
        cy.get('input[formcontrolname="number"]').type(Math.floor(Math.random() * (75 - 25 + 1)) + 25);
        cy.get('mat-select[formcontrolname="cfdi"]').click();
        cy.get('mat-option[tabindex="0"]').first().click();
    }

    eliminarDatosFiscales(razonSocial) {
        cy.get(`app-delete-product[id="btn-${razonSocial.toLowerCase()}-delete"]`).click();
    };

    botonEditarDatosFiscales(razonSocial) {
        cy.get(`p[id="btn-${razonSocial.toLowerCase()}-edit"]`).click();
    };


}

export default datosFiscalesPage;