class paginaInicio{
    /*login(url,correo,contrasena){
        cy.visit(url);
        cy.get('input[name="username"]').clear().type(correo);
        cy.get('input[name="password"]').clear().type(contrasena);
        cy.get('input[name="login"]').click();      
        cy.wait(5000);
    }*/

    login(url,correo,contrasena){
        cy.visit(url);
        cy.url().then(($url) => {
            cy.log($url);
            if($url == `${url}}/home`){ 
                cy.log($url);
            }else{
                cy.get('input[name="username"]').clear().type(correo);
                cy.get('input[name="password"]').clear().type(contrasena);
                cy.get('input[name="login"]').click();      
                cy.wait(5000);
            }

            
        });
    }

    logout(){
        cy.get('div[id="btn-logout"]').click();
    }
}

export default paginaInicio;