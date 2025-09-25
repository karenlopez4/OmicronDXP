import loginPage from "../../login/loginPage";
import perfilPage from "../perfilPage";
import direccionEntregaPage from "./direccionEntregaPage";

// Variables para guardar los datos de los fixtures
let loginData;
let direccionData;

describe("Dirección de entrega ", () => {
  const perfil = new perfilPage();
  const direccionEntrega = new direccionEntregaPage();
  const log = new loginPage();

  // Cargar los fixtures una sola vez
  before(() => {
    cy.fixture("data_general").then((data) => {
      loginData = data;
    });
    cy.fixture("infoDireccion_entrega/data_direccion_Entrega").then((data) => {
      direccionData = data;
    });
  });

  // Login y navegación antes de cada test
  beforeEach(() => {
    // Validar que estén cargados antes de usarlos
    expect(loginData, "login data no cargado").to.not.be.undefined;
    expect(direccionData, "data dirección no cargado").to.not.be.undefined;

    log.login(loginData.url, loginData.correo, loginData.contrasena);
    perfil.botonPerfil();
    perfil.botonDireccionesEntrega();
    direccionEntrega.seleccionarTabDireccionEntregaMedico();
  });

  it("✅ Debería agregar una nueva dirección de entrega @sanity @happyPath @regression", () => {
    direccionEntrega.botonAgregarDireccionEntrega();
    direccionEntrega.datosDireccionEntrega(
      direccionData.alias,
      direccionData.nombrePersona,
      direccionData.calle,
      direccionData.telefono,
      direccionData.establecimiento,
      direccionData.entrecalles,
      direccionData.referenciasDireccion
    );
    perfil.botonGuardar();
    cy.esperarSpinnerSiExiste();
    cy.validarMensajeExito("La dirección de entrega se agregó con éxito");
  });

  it("✏️ Validar que se pueda editar la nueva direccion en direccion de entrega @sanity @happyPath @regression", () => {
    direccionEntrega.botonEditarDireccion(direccionData.alias);
    direccionEntrega.datosEditarDireccion(
      direccionData.nombrePersona,
      direccionData.calle,
      direccionData.establecimiento,
      direccionData.entrecalles,
      direccionData.referenciasDireccion
    );
  });

  it("🗑️ Debería eliminar la dirección de entrega @sanity @happyPath @regression", () => {
    direccionEntrega.botonEliminarDireccion(direccionData.alias);
    perfil.botonAceptar();
    cy.esperarSpinnerSiExiste();
    cy.validarMensajeExito("La dirección de entrega fue eliminada con éxito");
  });
});
