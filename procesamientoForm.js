//& =============OBTENER LAS REFVERENCIAS DEL DOM: LOS ELE HTML con los que trabajaremos.
 let form = document.getElementById('contact-form')
 let nameInput = document.getElementById("name")
 let emailInput = document.getElementById("email")
 let messageInput = document.getElementById("message")

//*  variables para seleccionan LOS SPAN DE ERROR de los inputs
 let nameError = document.getElementById("name-error")
 let emailError = document.getElementById("email-error")
 let messageError = document.getElementById("message-error")

 //& =============FUNCIONES QUE NECESITAREMOS
//*  Funcion booleana 🏳️ para validar el nombre: letras y espacios en blanco 
function validarNombre(nombre){ //TODO: Rercuerda actualizar el nombre de las funciones
    const patron = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/;
    return patron.test(nombre) && nombre.trim().length > 0
}
function validarEmail(email){ //TODO: Rercuerda actualizar el nombre de las funciones
    const patron = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return patron.test(email)
}
function validarMensaje(mensaje){ //TODO: Rercuerda actualizar el nombre de las funciones
    return mensaje.trim().length >= 10
}

//*  Funciones genericas para MOSTRAR EL MENSAJE DEL SPAN DE ERROR de los 3 inputs.
function mostrarError(elemento, mensaje){
    elemento.textContent =  mensaje
    elemento.style.display = 'block'
}
//*  Funciones genericas para OCULTAR EL SPAN DE ERROR de los 3 inputs.
function ocultarError(elemento){
    elemento.style.display = 'none'
}


 // TODO: =============FUNCIONES MANEJADORAS DEL EVENTO "input", validaNombrelidaciones en tiempo real 
 //* CONDCIONALES: IF/ELSE. en los inputs hay 3 caminos, se tomara uno, dada una condicion cierta
//  evento input: se dispara cuando usuario actualiza el input, o sea la cajita donde se escribe el dato
// "this" es el oyente del evento dentro d ela funcion manejadora del evento.

// *Validacion en tiempo real para el input name 
nameInput.addEventListener('input', function(){
    if(this.value.length > 0){
        if(validarNombre(this.value)){
            ocultarError(nameError)
            this.style.borderBlockColor = '#4CAF50'
        } else {
            mostrarError(nameError, 'El nombre solo debe contener letras')
            this.style.borderBlockColor = '#fa4336'
        }
    } else{
        ocultarError(nameError)
        this.style.borderBlockColor = ''
    }
 })

 // *Validacion en tiempo real para el input email 
emailInput.addEventListener('input', function(){
    if(this.value.length > 0){
        if(validarEmail(this.value)){
            ocultarError(emailError)
            this.style.borderBlockColor = '#4CAF50'
        } else {
            mostrarError(emailError, 'Ingresa un email válido (ej: nombre@correo.com)')
            this.style.borderBlockColor = '#fa4336'
        }
    } else{
        ocultarError(emailError)
        this.style.borderBlockColor = ''
    }
 })

 // *Validacion en tiempo real para el input message
messageInput.addEventListener('input', function(){
    let longitudActual = this.value.trim().length 
    if(this.value.length > 0){
        if(validarMensaje(this.value)){
            ocultarError(messageError)
            this.style.borderBlockColor = '#4CAF50'
        } else {
            let faltantes = 10 - longitudActual
            mostrarError(messageError, `Faltan ${faltantes} caracteres (mínimo 10)`)
            this.style.borderBlockColor = '#fa4336'
        }
    } else{
        ocultarError(messageError)
        this.style.borderBlockColor = ''
    }
 })

 form.addEventListener('submit', function(event){
    //*Limpiar los errores previos
    ocultarError(nameError)
    ocultarError(emailError)
    ocultarError(messageError)

    // bandera 🏳️de que todo esyta OK para enviar el form
    let formularioValido = true;
    //* validando el input name
    if(!validarNombre(nameInput.value)){
        mostrarError(nameError, 'El nombre solo debe contener letras')
        this.style.borderBlockColor = '#fa4336'
        formularioValido = false;
    }
    //* validando el input email
    if(!validarEmail(emailInput.value)){
        mostrarError(emailError, 'Ingresa un email válido (ej: nombre@correo.com)')
        this.style.borderBlockColor = '#fa4336'
        formularioValido = false;
    }
    //* validando el input mensaje
    if(!validarMensaje(messageInput.value)){
        mostrarError(messageError, 'Faltan caracteres (mínimo 10)')
        this.style.borderBlockColor = '#fa4336'
        formularioValido = false;
    }

    //* que pasa si el formulario es == 'false', NO SE ENVIA
    if(!formularioValido){
        event.preventDefault();
        alert('Por favor corrige los errores antes de enviar')
    } else{
        alert('Formulario valido, enviado')
        event.target.reset(); 
    }


 })