// Interacción visual de la vista de inicio de sesión.
// Esta evaluación solo pide la maqueta de front, sin conexión a backend.

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("form-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!correo || !password) {
    errorMsg.textContent = "Completa correo y contraseña para continuar.";
    errorMsg.hidden = false;
    return;
  }

  errorMsg.hidden = true;
  // Vista de demostración: aquí solo se simula el paso siguiente.
  window.location.href = "museos.html";
});

// --- Vista de reservas ---
const reserveForm = document.getElementById("reserve-form");

if (reserveForm) {
  const reserveError = document.getElementById("reserve-error");

  reserveForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const museo = document.getElementById("museo").value;
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;

    if (!museo || !fecha || !personas) {
      reserveError.textContent = "Completa museo, fecha y cantidad de personas.";
      reserveError.hidden = false;
      return;
    }

    reserveError.hidden = true;
    // Vista de demostración: aquí solo se simula el paso siguiente.
    window.location.href = "pagos.html";
  });
}
