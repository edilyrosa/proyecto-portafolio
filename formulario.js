
// & ========================= OBTENEMOS LAS REFERENCIAS DEL DOM DE LOS ELEMENTOS
//* Seleccionar el formulario y los campos
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// * Seleccionar los mensajes de error de cada <span <input
// ?<span class="error-message" id="name-error"> Nombre invalido</span>
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// & ========================= PREPARACION DE FUNCIONES QUE LUEGO UTLIZAREMOS
// * Función booleana🏳️, para validar el nombre (solo letras y espacios)
// Expresión regular con solo espacios en blanco y letras 
// acentuadas y la "ñ", la sintaxis en JavaScript
//?Funcion patron.test('texto a testear')
function validarNombre(nombre) { 
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return patron.test(nombre) && nombre.trim().length > 0;
}

// * Función booleana🏳️, para validar el email
function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}
// * Función booleana🏳️, para validar el mensaje (mínimo 10 caracteres)
function validarMensaje(mensaje) {
    return mensaje.trim().length >= 10;
}

// * Función generica, para MOSTRAR MSJ EN SPAN DE ERROR de los 3 inputs (elemento)
//? textContent atributo para agregar contenido a un ele HTML
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    // block: El elemento es un span, inline con display: none;
    elemento.style.display = 'block';
}

// * Función generica, para OCULTAR SPAN DE ERROR, si usuario enmiende el ERROR
function ocultarError(elemento) {
    elemento.style.display = 'none';
}

// & ===========FUNCIONES MANEJADORA DEL EVENTO "INPUT", VALIDACIÓN EN TIEMPO REAL DE LOS CAMPOS
// evento 'input' por de cambio de datos que se dispara inmediatamente cuando el valor 
// del input ha sido modificado por el usuario.
//* Validación en tiempo real para el nombre
nameInput.addEventListener('input', function() {
// Keyword "this" es el elemento HTML al que se le ha adjuntado el listener (oyente) del evento, 
// representa a "nameInput"
    if (this.value.length > 0) {            //todo: accede a su value, al menos 1 caracteres
        if (validarNombre(this.value)) {    //*Si es VALIDO
            ocultarError(nameError); //Ocuta el error
            this.style.borderColor = '#4CAF50'; // Verde si es válido
        } else {                            //!Si es INVALIDO
            mostrarError(nameError, 'El nombre solo puede contener letras');
            this.style.borderColor = '#f44336'; // Rojo si es inválido
        }
    } else {                                //*Usuario no ha escrito o borro todo
        ocultarError(nameError);
        this.style.borderColor = '';
    }
});

//* Validación en tiempo real para el email
emailInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        if (validarEmail(this.value)) {
            ocultarError(emailError);
            this.style.borderColor = '#4CAF50';
        } else {
            mostrarError(emailError, 'Ingresa un email válido (ej: nombre@correo.com)');
            this.style.borderColor = '#f44336';
        }
    } else {
        ocultarError(emailError);
        this.style.borderColor = '';
    }
});

//* Validación en tiempo real para el mensaje
messageInput.addEventListener('input', function() {
    const longitudActual = this.value.trim().length;
    
    if (longitudActual > 0) {
        if (validarMensaje(this.value)) {
            ocultarError(messageError);
            this.style.borderColor = '#4CAF50';
        } else {
            const faltantes = 10 - longitudActual;
            mostrarError(messageError, `Faltan ${faltantes} caracteres (mínimo 10)`);
            this.style.borderColor = '#f44336';
        }
    } else {
        ocultarError(messageError);
        this.style.borderColor = '';
    }
});

  // & ===============VALIDACIÓN AL ENVIAR EL FORMULARIO
form.addEventListener('submit', function(evento) {
    
    //* Limpiar errores previos
    ocultarError(nameError);
    ocultarError(emailError);
    ocultarError(messageError);
    
    //*bandera de que todo debe estar bn 🏳️
    let formularioValido = true;
    // & ===============ANTES DE ENVIAR EL FORM CON "SUBMIT", HAY QUE VALIDAR CADA DATO:
    // & POR SU USUARIO INTENTA ENVIAR LA DATA PESE A LAS VALIDACIONES INSTANTANEAS.
    //* Validar nombre
    if (!validarNombre(nameInput.value)) { //!Si no esta bn, haz lo siguiente
        mostrarError(nameError, 'El nombre solo puede contener letras');
        nameInput.style.borderColor = '#f44336';
        formularioValido = false;  //! No esta bn 🚩
    }
    
    //* Validar email
    if (!validarEmail(emailInput.value)) {
        mostrarError(emailError, 'Ingresa un email válido');
        emailInput.style.borderColor = '#f44336';
        formularioValido = false;
    }
    
    //* Validar mensaje
    if (!validarMensaje(messageInput.value)) {
        mostrarError(messageError, 'El mensaje debe tener al menos 10 caracteres');
        messageInput.style.borderColor = '#f44336';
        formularioValido = false;
    }
    
    //* Si hay errores, prevenir el envío
    if (!formularioValido) {
        evento.preventDefault();
        alert('Por favor corrige los errores antes de enviar');
    } else {
        // Opcional: Limpiar el formulario después de enviarlo
        // El formulario se enviará a Formspree automáticamente
        alert('¡Formulario válido! Enviando...');

        
    }
});