describe("Login Page", () => {
  beforeEach(() => {
    // Visita la página de login antes de cada prueba
    cy.visit("/login");

    // Alias para elementos comunes
    cy.get(
      'input[placeholder="Correo electrónico"], input[placeholder="Email"]'
    ).as("usernameInput");
    cy.get('input[placeholder="Contraseña"], input[placeholder="Password"]').as(
      "passwordInput"
    );
    cy.get('[aria-label="LOGIN"], [aria-label="INGRESAR"]').as("loginButton");
  });

  it("should display validation errors when submitting empty fields", () => {
    // Intenta enviar el formulario vacío
    cy.get("@loginButton").click();

    cy.contains("div", /Username is required|Usuario es requerido/).should(
      "be.visible"
    );
    cy.contains("div", /Password is required|Contraseña es requerida/).should(
      "be.visible"
    );
  });

  it("should log in successfully with valid credentials", () => {
    // Ingresa credenciales válidas
    cy.get("@usernameInput").type("gmachicaoq@unsa.edu.pe");
    cy.get("@passwordInput").type("LEG@RD29pros");
    cy.get("@loginButton").click();
    // Verifica la redirección y el contenido del feed
    cy.url().should("include", "/feed");

    cy.get("footer")
      .should("exist")
      .find("button")
      .then(($button) => {
        const text = $button.text();
        if (text === "Logout" || text === "Cerrar sesión") {
          cy.wrap($button).click();
        } else {
          throw new Error("El botón no contiene texto válido");
        }
      });
  });

  it("should display an error message for invalid credentials", () => {
    // Ingresa credenciales incorrectas
    cy.get("@usernameInput").type("invaliduser@example.com");
    cy.get("@passwordInput").type("InvalidPassword123");
    cy.get("@loginButton").click();

    // Verifica el mensaje de error
    cy.get("[data-sonner-toast]").should("exist");
  });
});
