const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const edad = document.getElementById('edad');
const btnEnviar = document.getElementById('btn-enviar');
const formulario = document.getElementById('formulario');

const errores = {
  nombre: document.getElementById('error-nombre'),
  email: document.getElementById('error-email'),
  password: document.getElementById('error-password'),
  confirmPassword: document.getElementById('error-confirm-password'),
  edad: document.getElementById('error-edad')
};

function validarNombre() {
  if (nombre.value.length >= 3) {
    errores.nombre.textContent = '';
    return true;
  } else {
    errores.nombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return false;
  }
}

function validarEmail() {
  const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email.value)) {
    errores.email.textContent = '';
    return true;
  } else {
    errores.email.textContent = 'Correo no válido.';
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.[0-9])(?=.[!@#$%^&*])/;
  if (password.value.length >= 8 && regex.test(password.value)) {
    errores.password.textContent = '';
    return true;
  } else {
    errores.password.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un símbolo.';
    return false;
  }
}

function validarConfirmPassword() {
  if (password.value === confirmPassword.value) {
    errores.confirmPassword.textContent = '';
    return true;
  } else {
    errores.confirmPassword.textContent = 'Las contraseñas no coinciden.';
    return false;
  }
}

function validarEdad() {
  const edadVal = parseInt(edad.value);
  if (!isNaN(edadVal) && edadVal >= 18) {
    errores.edad.textContent = '';
    return true;
  } else {
    errores.edad.textContent = 'Debes tener al menos 18 años.';
    return false;
  }
}

function validarFormulario() {
  const esValido = validarNombre() && validarEmail() && validarPassword() && validarConfirmPassword() && validarEdad();
  btnEnviar.disabled = !esValido;
  return esValido;
}

// Eventos
[nombre, email, password, confirmPassword, edad].forEach(input => {
  input.addEventListener('input', validarFormulario);
});

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validarFormulario()) {
    alert('Formulario enviado correctamente.');
    formulario.reset();
    btnEnviar.disabled = true;
  }
});