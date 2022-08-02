// Función que verifica si un input del formulario de login es válido o no
function valida_login(input){
    const tipoInput = input.dataset.type;
    if (input.validity.valid) { // Campo es válido
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else { // Campo inválido
        input.parentElement.querySelector(".error-message").innerHTML = mostrarErrorMessage(tipoInput, input); // mostrar mensaje de error
    }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajesError = {
    email: {
        valueMissing: "Campo de email no puede estar vacío",
        typeMismatch: "Email inválido" 
    },
    password: {
        valueMissing: "Necesita obligatoriamente una contraseña",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
}

// Función que retorna el mensaje de error correspondiente al input y a su tipo
const mostrarErrorMessage = (inputType, input) => {
    let mensaje = "";
    tipoErrores.forEach(error => {
        if(input.validity[error]){ // Elemento del error en el objeto validity es true
            mensaje = mensajesError[inputType][error];
        }
    });
    return mensaje;
};

const campos = document.querySelectorAll("[data-type]"); // arreglo con los inputs del formulario de login


campos.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida_login(input.target);
    });
});

