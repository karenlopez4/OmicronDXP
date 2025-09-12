
class paginaPerfil{
    botonPerfil() { 
        cy.get('.menu-icon-toggle').should('be.visible').click();
        cy.get('p[id="btn-my-profile"]').click(); 
    }
    botonConfigReceta(){
        cy.get('#mat-tab-label-0-2').click().click();
    }
    botonDireccionesEntrega(){
        cy.get('#mat-tab-label-0-4').click().click();
    }
    botonDatosFiscales(){
        cy.get('#mat-tab-label-0-5').click().click();
    }
    botonGuardar(){
        cy.get('button[name="btn-save"]').click();
    }
    botonAceptar(){
        cy.get('button[name="btn-accept"]').click();
        cy.wait(3000);
    }

}

export default paginaPerfil;