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
function validaNombre(nombre){
    const patron = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/;
    return patron.test(nombre) && nombre.trim().length > 0
}
function validaNombre(email){
    const patron = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return patron.test(email)
}
function validaNombre(mensaje){
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
nameInput.addEventListener('input', ()=>{})