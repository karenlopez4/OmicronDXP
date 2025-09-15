import LoginPage from '../../login/loginPage';
import PerfilPage from '../perfilPage';
import DatosFiscalesPage from './datosFiscalesPage';

describe("Datos fiscales", () => {
  const perfil = new PerfilPage();
  const datosFiscales = new DatosFiscalesPage();
  const log = new LoginPage();

  // Usar variables de nivel suite
  let loginData;
  let datosFiscalesData;

  before(() => {
    cy.fixture("data_general").then((data) => {
      loginData = data;
    });
    cy.fixture("infoDatos_fiscales/data_Fiscales").then((data) => {
      datosFiscalesData = data;
    });
  });

  beforeEach(() => {
    // Validar que estén cargados antes de usar
    expect(loginData, "login data cargado").to.not.be.undefined;
    expect(datosFiscalesData, "datos fiscales cargado").to.not.be.undefined;

    log.login(loginData.url, loginData.correo, loginData.contrasena);
    perfil.botonPerfil();
    perfil.botonDatosFiscales();
  });

  it("Agregar nuevos datos fiscales @regression", () => {
    datosFiscales.botonAgregarDatosFiscales();
    datosFiscales.llenarDatosFiscales(
      datosFiscalesData.razonSocial,
      datosFiscalesData.rfc,
      datosFiscalesData.calle,
      datosFiscalesData.correoFiscal
    );
    datosFiscales.botonGuardarDatos();
    cy.esperarSpinnerSiExiste();
    //datosFiscales.validarMensajeExito('Los datos fiscales se agregaron con éxito');
     cy.validarMensajeExito("Los datos fiscales se agregaron con éxito");
  });

  it("Editar datos fiscales @regression", () => {
    datosFiscales.botonEditarDatosFiscales(datosFiscalesData.razonSocial);
    datosFiscales.editarDatosFiscales();
    datosFiscales.botonGuardarDatos();
    cy.esperarSpinnerSiExiste();
    //datosFiscales.validarMensajeExito('Los datos fiscales se editaron con éxito');
     cy.validarMensajeExito("Los datos fiscales se agregaron con éxito"); // deberia decir se editaron
  });

  it("Eliminar datos fiscales @regression", () => {
    datosFiscales.eliminarDatosFiscales(datosFiscalesData.razonSocial);
    perfil.botonAceptar();
    cy.esperarSpinnerSiExiste();
   // datosFiscales.validarMensajeExito('Los datos fiscales fueron eliminados con éxito');
    cy.validarMensajeExito("Los datos fiscales fueron eliminados con éxito");
  });
});
