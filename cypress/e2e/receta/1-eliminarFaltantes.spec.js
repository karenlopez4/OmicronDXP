import loginPage from "../login/loginPage"
import faltantesPage from "../faltantes/faltantesPage"

describe("Receta", function (){
    const faltante = new faltantesPage();
    const log = new loginPage();
    before(function () { 
        cy.fixture('data_general').then(function (data) { this.login = data });
        cy.fixture('infoReceta/data_Receta').then(function (data) { this.datos = data });
    });
    it("Eliminar faltantes necesarios para el flujo de receta", function(){
        log.login(this.login.url,this.login.correoInventario,this.login.contrasenaInventario);

        
        for(var i=0; i<14; i++){
            faltante.eliminarExistenciaMP(this.datos.codigo[i],this.datos.principioActivo[i]);
        }
        //Validacion
        for(var i=0; i<14; i++){
            if(i == 1){
                cy.contains(this.datos.principioActivo[i].toUpperCase()).should("not.exist")
            }else{
                cy.contains(this.datos.codigo[i].toUpperCase()).should("not.exist");
            }   
            
        }
        
        faltante.botonEnvase();
        faltante.eliminarExistencia(this.datos.envase1);
        faltante.eliminarExistencia(this.datos.envase2);
        faltante.eliminarExistencia(this.datos.envase3);
        
        cy.contains(this.datos.envase1).should("not.exist");
        cy.contains(this.datos.envase2).should("not.exist");
        
        faltante.botonProductoTerminado();
        faltante.eliminarExistencia(this.datos.producto3);
        faltante.eliminarExistencia(this.datos.producto4);
        faltante.eliminarExistencia(this.datos.producto5);
        faltante.eliminarExistencia(this.datos.producto6);
        
        cy.contains(this.datos.producto3).should("not.exist");
        cy.contains(this.datos.producto4).should("not.exist");
        cy.contains(this.datos.producto5).should("not.exist");
        cy.contains(this.datos.producto6).should("not.exist");
    });  
});