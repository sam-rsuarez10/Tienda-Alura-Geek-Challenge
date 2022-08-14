import { productServices } from "../services/product-service.js";

const edit_form  = document.querySelector("[data-form-new]");

// Función que tranforma el precio en float
const transform_price = (str) => {
    const exp = new RegExp("\\d+\\.\\d{2}", "i"); // expresión regular que obtiene la parte numérica del precio
    const float_price = exp.exec(str);
    return parseFloat(float_price[0]);
}

// Función que busca y despliega por pantalla los datos del producto seleccionado alamcenados en el server
const getInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id == null){
        return;
    }
     // Se procede a capturar los elementos del formulario
    const url_product = document.querySelector("[data-type=url]");
    const categoria = document.querySelector("[data-type=category]");
    const nombre = document.querySelector("[data-type=nombre_product]");
    const precio = document.querySelector("[data-type=precio]");
    const description = document.querySelector("[data-type=description]");

    try {
        const product = await productServices.detailProduct(id);
        if(product.url_image && product.category && product.nombre && product.precio && product.description){
            url_product.value = product.url_image;
            categoria.value = product.category;
            nombre.value = product.nombre;
            precio.value = transform_price(product.precio);
            description.value = product.description;
        } else {
            throw new Error();
        }
    } catch {
        alert("Ups! Ocurrió un error, intente más tarde");
    }
}

getInfo();

edit_form.addEventListener("submit", (event) => {
    event.preventDefault();
    // se guarda el id en una variable
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    // Se capturan los datos ingresados por el usuario
     // Se procede a capturar los elementos del formulario
    const urlImage = document.querySelector("[data-type=url]").value;
    const categoria = document.querySelector("[data-type=category]").value;
    const nombre = document.querySelector("[data-type=nombre_product]").value;
    const precio = document.querySelector("[data-type=precio]").value;
    const description = document.querySelector("[data-type=description]").value;

    const str_precio = "$ " + precio; // se define el precio como string
    // Se procede a actualizar el producto en el servidor
    productServices.updateProduct(id, urlImage, categoria, nombre, str_precio, description).then(() => {
        alert("Producto editado exitosamente");
        window.location.href = "./products.html";
    }).catch(() => {
        alert("Ups! Ocurrió un error intente más tarde");
    })
});