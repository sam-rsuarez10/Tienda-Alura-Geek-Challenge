import { mostrarErrorMessage } from "./mostrar-mensaje-error.js";
const tipoErroresContacto = [
    "valueMissing",
    "patternMismatch",
]

const mensajesErrorContacto = {
    nombre: {
        valueMissing: "Mensaje no puede ser anónimo",
        patternMismatch: "Nombre debe tener mínimo 3 caracteres y máximo 40"
    },
    mensaje: {
        valueMissing: "Mensaje no puede ser vacío",
    }
}

// Función que valida si un input del formulario de agregar un nuevo producto es válido
function valida_contacto(input){
    const tipoInput = input.dataset.type;
    let span_error = document.querySelector("[data-mensaje]");
    if(input.validity.valid){
        span_error.innerHTML = "";
    } else {
        span_error.style.color = "red";
        span_error.innerHTML = mostrarErrorMessage(tipoInput, input, tipoErroresContacto, mensajesErrorContacto);
    }
}

/*// Función que retorna el mensaje de error correspondiente al input y a su tipo
const mostrarErrorMessage = (inputType, input, erroresArray, errorMessages) => {
    let mensaje = "";
    erroresArray.forEach(error => {
        if(input.validity[error]){ // Elemento del error en el objeto validity es true
            mensaje = errorMessages[inputType][error];
        }
    });
    return mensaje;
};*/

const campos = document.querySelectorAll("[data-type]"); // arreglo con los inputs del formulario de contacto
campos.forEach(input =>{
    input.addEventListener("blur", (input)=>{
        valida_contacto(input.target);
    })
});

const form  = document.querySelector("[data-contacto]");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let span_message = document.querySelector("[data-mensaje]");
    span_message.style.color = "green";
    span_message.innerHTML = "Mensaje enviado!"
    // se limpian los campos de los inputs
    document.querySelector("[data-type=nombre]").value = "";
    document.querySelector("[data-type=mensaje]").value = "";
});