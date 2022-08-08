import { mostrarErrorMessage } from "./mostrar-mensaje-error.js";

const tipoErroresProduct = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "rangeUnderflow"
]

const mensajesErrorProduct = {
    url: {
        valueMissing: "El producto debe tener una imagen"
    },
    category: {
        valueMissing: "Si el producto no pertenece a ninguna categoría colocar 'None'"
    },
    nombre_product: {
        valueMissing: "El producto debe tener un nombre obligatorio",
        patternMismatch: "Nombre del producto debe tener entre 3 y y 20 caracteres"
    },
    precio: {
        valueMissing: "El producto no puede estar sin precio",
        rangeUnderflow: "El precio debe ser un número mayor o igual a 0"
    },
    description: {
        valueMissing: "El producto debe tener una descripción"
    }
}

// Función que valida si un input del formulario de agregar un nuevo producto es válido
function valida_nuevo_producto(input){
    const tipoInput = input.dataset.type;
    if(input.validity.valid){
        input.parentElement.querySelector("[data-error]").innerHTML = "";
    } else {
        input.parentElement.querySelector("[data-error]").innerHTML = mostrarErrorMessage(tipoInput, input, tipoErroresProduct, mensajesErrorProduct);
    }
}

const inputs_form = document.querySelectorAll("[data-field-new]");
inputs_form.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida_nuevo_producto(input.target);
    });
});

/*const formulario_agregar_producto = document.querySelector("[data-form-new]");
formulario_agregar_producto.addEventListener("submit", () => {
    alert("Producto agregado correctamente");
})*/

