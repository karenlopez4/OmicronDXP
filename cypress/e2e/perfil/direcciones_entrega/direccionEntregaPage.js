var codigos = ['03820', '03240', '03230', '03400', '03560', '03610', '03840', '03010', '03710', '03940', '03540', '03640', '03100',
    '03103', '03104', '03590', '03720', '03620', '03000', '03303', '03570', '03300', '03410', '03320', '03900', '03730', '03800',
    '03660', '03310', '03700', '03200', '03600', '03530', '03330', '03550'];
class direccionEntregaPage {

    botonAgregarDireccionEntrega() {
        cy.get('button[name="btn-add-address-delivery"]').first().click();
    };

    datosDireccionEntrega(alias, nombrePersona, calle, telefono, establecimiento, entrecalles, referencias) {
        cy.get('input[formcontrolname="aliasDirection"]').type(alias);
        cy.get('input[formcontrolname="contact"]').type(nombrePersona);
        cy.get('input[formcontrolname="PostalCode"]').type(codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)]).blur();
        cy.get('mat-select[formcontrolname="Municipality"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="Neighborhood"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="Street"]').type(calle);
        cy.get('input[formcontrolname="Number"]').type(Math.floor(Math.random() * (75 - 25 + 1)) + 25);
        cy.get('input[formcontrolname="PropertyName"]').type(establecimiento + ' ' + Math.floor(Math.random() * (75 - 25 + 1)) + 25);
        cy.get('input[formcontrolname="Telephone"]').type(telefono);
        cy.get('input[formcontrolname="BetweenStreets"]').type(entrecalles);
        cy.get('input[formcontrolname="References"]').type(referencias);
    };

    botonEliminarDireccion(alias) {
        cy.get(`app-delete-product[id="btn-${alias.toLowerCase()}-delete"]`).first().click();
    };


    botonEditarDireccion(alias) {
        cy.get(`p[id="btn-${alias.toLowerCase()}-edit"]`).first().click();
    }


    datosEditarDireccion(nombrePersona,calle,establecimiento,entrecalles,referenciasDireccion) {
        var nombre2 = nombrePersona + Math.floor(Math.random() * (34 - 1 + 1) + 1);
        var cp2 = codigos[Math.floor(Math.random() * (34 - 1 + 1) + 1)];
        var calle2 = calle + Math.floor(Math.random() * (34 - 1 + 1) + 1);
        var numeroCasa2 = Math.floor(Math.random() * (34 - 1 + 1) + 1);
        var establecimiento2 = establecimiento + Math.floor(Math.random() * (34 - 1 + 1) + 1);
        var telefono2 = Math.floor(Math.random() * (9000000000 - 1000000000 + 1000000000) + 1000000000);
        var entrecalles2 = entrecalles + Math.floor(Math.random() * (34 - 1 + 1) + 1);
        var referenciasDireccion2 = referenciasDireccion + Math.floor(Math.random() * (34 - 1 + 1) + 1);

        cy.get('input[formcontrolname="contact"]').clear().type(nombre2);
        cy.get('input[formcontrolname="PostalCode"]').clear().type(cp2).blur();
        cy.get('mat-select[formcontrolname="Municipality"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('mat-select[formcontrolname="Neighborhood"]').click();
        cy.get('mat-option[tabindex="0"]').click();
        cy.get('input[formcontrolname="Street"]').clear().type(calle2);
        cy.get('input[formcontrolname="Number"]').clear().type(numeroCasa2);
        cy.get('input[formcontrolname="PropertyName"]').clear().type(establecimiento2);
        cy.get('input[formcontrolname="Telephone"]').clear().type(telefono2);
        cy.get('input[formcontrolname="BetweenStreets"]').clear().type(entrecalles2);
        cy.get('input[formcontrolname="References"]').clear().type(referenciasDireccion2);
        cy.get('button[name="btn-save"]').click();
        cy.get('button[name="btn-accept"]').click();

        //Validaciones
        cy.contains(nombre2.toUpperCase()).should('exist');
        cy.contains(cp2).should('exist');
        cy.contains(calle2.toUpperCase()).should('exist');
        cy.contains(numeroCasa2).should('exist');
        cy.contains(establecimiento2.toUpperCase()).should('exist');
        cy.contains(telefono2).should('exist');
        cy.contains(entrecalles2.toUpperCase()).should('exist');
        cy.contains(referenciasDireccion2.toUpperCase()).should('exist');
    }



}

export default direccionEntregaPage;