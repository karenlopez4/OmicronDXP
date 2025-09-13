// cypress/support/pageObjectsM/PortalAlumno/Perfil/datosFiscalesPage.js

const codigos = ['03820', '03240', '03230', '03400', '03560', '03610', '03840', '03010', '03710', '03940', '03540', '03640', '03100',
  '03103', '03104', '03590', '03720', '03620', '03000', '03303', '03570', '03300', '03410', '03320', '03900', '03730', '03800',
  '03660', '03310', '03700', '03200', '03600', '03530', '03330', '03550'];

function getRandomPostalCode() {
  return codigos[Math.floor(Math.random() * codigos.length)];
}

function getRandomNumber(min = 25, max = 75) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DatosFiscalesPage {

  // Botones

  botonAgregarDatosFiscales() {
    cy.contains('button', 'Agregar nuevos datos').click();
  }

  botonGuardarDatos() {
    cy.get('button[name="btn-save-tax-data"]').click();
  }

  botonEditarDatosFiscales(razonSocial) {
    cy.contains('p', `RAZÓN SOCIAL: ${razonSocial}`)
      .parentsUntil('app-tax-direction')
      .parent()
      .within(() => {
        cy.contains('div', 'Editar').click();
      });
  }

  eliminarDatosFiscales(razonSocial) {
    const id = `btn-${razonSocial.toLowerCase()}-delete`;
    cy.get(`app-delete-product[id="${id}"]`).click();
  }

  // Formulario

  llenarDatosFiscales(razonSocial, rfc, calle, correoFiscal) {
    this.llenarRazonSocialYRfc(razonSocial, rfc);
    this.llenarDireccion(calle);
    this.llenarCorreoFiscal(correoFiscal);
    this.seleccionarCFDI();
    this.seleccionarRegimenFiscal('Coordinados');
  }

  editarDatosFiscales() {
    cy.get('input[formcontrolname="zipCode"]')
      .clear()
      .type(getRandomPostalCode()).blur();

    this.seleccionarPaisYColonia();

    cy.get('input[formcontrolname="street"]').click().type(" edit");
    cy.get('input[formcontrolname="number"]').type(getRandomNumber());

    this.seleccionarCFDI();
    this.seleccionarRegimenFiscal('Incorporación Fiscal');
  }

  // Secciones del formulario

  llenarRazonSocialYRfc(razonSocial, rfc) {
    cy.get('input[formcontrolname="nickName"]').type(razonSocial);
    cy.get('input[formcontrolname="rfc"]').type(rfc);
    cy.get('input[formcontrolname="zipCode"]').type(getRandomPostalCode()).blur();
  }

  llenarDireccion(calle) {
    this.seleccionarPaisYColonia();
    cy.get('input[formcontrolname="street"]').type(calle);
    cy.get('input[formcontrolname="number"]').type(getRandomNumber());
  }

  llenarCorreoFiscal(correo) {
    cy.get('input[formcontrolname="correo"]').clear().type(correo);
  }

  seleccionarPaisYColonia() {
    cy.get('mat-select[formcontrolname="country"]').click();
    cy.get('mat-option[tabindex="0"]').first().click();

    cy.get('mat-select[formcontrolname="suburb"]').click();
    cy.get('mat-option[tabindex="0"]').first().click();
  }

  seleccionarCFDI() {
    cy.get('mat-select[formcontrolname="cfdi"]').click();
    cy.get('mat-option[tabindex="0"]').first().click();
  }

    seleccionarRegimenFiscal(nombreRegimen) {
    // Encuentra el mat-select relacionado con el label "Régimen fiscal"
    cy.contains('mat-label', 'Régimen fiscal')
        .parents('.mat-form-field')
        .find('mat-select')
        .click();

    // Selecciona la opción deseada
    cy.get('mat-option').contains(nombreRegimen).click();
    }


  // Validación de mensajes

  validarMensajeExito(mensajeEsperado) {
    cy.contains('span', mensajeEsperado).should('exist');
    cy.get('button[name="btn-accept"]').click();
  }
}

export default DatosFiscalesPage;
