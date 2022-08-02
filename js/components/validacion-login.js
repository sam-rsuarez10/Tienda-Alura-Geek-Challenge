import { authenticate } from "../controllers/authenticate-user.js";

// Función que verifica si un input del formulario de login es válido o no
function valida_login(input){
    const tipoInput = input.dataset.type;
    if (input.validity.valid) { // Campo es válido
        input.parentElement.querySelector(".error-message").innerHTML = "";
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
        patternMismatch: "Al menos 6 caracteres, máximo 20, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
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
const formulario = document.querySelector("[data-form]");

campos.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida_login(input.target);
    });
});
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    // Se procede a capturar los valores ingresados por el usuario
    const email = document.querySelector("[data-type=email]").value;
    const password = document.querySelector("[data-type=password]").value;
    const errorElement = document.querySelector(".error-message");
    let is_authenticated = authenticate(email, password); // Esto retorna una promise con una respuesta booleana
    is_authenticated.then(result => {
        if(result){
            // Resultado de la promise es true y el usuario termina de ser verificado
            window.location.href = "../../templates/products.html";
        } else {
            // Error de autenticación, se despliega mensaje de error
            errorElement.innerHTML = "Email o contraseña incorrectos";
        }
    }).catch(() => {
        errorElement.innerHTML = "Ups! Ocurrió un error, intente más tarde";
    });
});

