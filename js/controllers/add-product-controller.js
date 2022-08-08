import { productServices } from "../services/product-service.js";

const form = document.querySelector("[data-form-new]"); // formulario para agregar un nuevo producto


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Se procede a capturar los elementos del formulario
    const url = document.querySelector("[data-type=url]").value;
    const categoria = document.querySelector("[data-type=category]").value;
    const nombre = document.querySelector("[data-type=nombre_product]").value;
    const precio = document.querySelector("[data-type=precio]").value;
    const description = document.querySelector("[data-type=description]").value;

    const str_precio = "$ " + precio;
    productServices.createProduct(url, categoria, nombre, str_precio, description, "non-default")
    .then(() => {
        alert("Producto agregado correctamente");
        window.location.href = "./products.html";
    }).catch(() => {
        alert("Ups! Ocurrió un error, intente más tarde");
    })
})