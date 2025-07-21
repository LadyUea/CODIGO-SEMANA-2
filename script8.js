// Función para mostrar alerta
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let valido = true;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  // Validar nombre
  if (nombre.value.trim() === "") {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  // Validar email
  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.classList.add("is-invalid");
    valido = false;
  } else {
    email.classList.remove("is-invalid");
  }

  // Validar mensaje
  if (mensaje.value.trim() === "") {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (!valido) {
    event.preventDefault(); // Evita que se envíe el formulario
  } else {
    alert("Formulario enviado correctamente.");
  }
});
