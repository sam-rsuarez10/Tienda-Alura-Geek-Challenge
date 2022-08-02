function valida_login(input){
    const tipoInput = input.dataset.type;
    if (input.validity.valid) { // Campo es válido
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else { // Campo inválido
        input.parentElement.querySelector(".error-message").innerHTML = mostrarErrorMessage(tipoInput, input);
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

const mostrarErrorMessage = (inputType, input) => {
    let mensaje = "";
    tipoErrores.forEach(error => {
        if(input.validity[error]){ // Elemento del error en el objeto validity es true
            mensaje = mensajesError[inputType][error];
        }
    });
    return mensaje;
};

const campos = document.querySelectorAll("[data-type]");

campos.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida_login(input.target);
    });
});

