import { productServices } from "../services/product-service.js";

// Función que retorna las categorías existentes
/*const receiveCategories = async () => {
    try{
        const categories = await categoryServices.readCategories();
        return categories
    }catch{
        return null;
    }
}*/

const createListElement = (url, nombre, precio) => {
    const element = document.createElement("li");

    // Creación del div que contendrá la imagen
    const divImage = document.createElement("div");
    divImage.style.background = `url(${url}) no-repeat center / cover`;
    divImage.classList.add("producto__imagen");
    element.appendChild(divImage);

    // Creación del h4 para el nombre del producto
    const h4_name = document.createElement("h4");
    h4_name.textContent = nombre;
    h4_name.classList.add("producto__nombre");
    element.appendChild(h4_name);

    // Creación del p para el precio
    const p_precio = document.createElement("p");
    p_precio.textContent = precio;
    p_precio.classList.add("producto__precio");
    element.appendChild(p_precio);

    // Creación del link
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = "Ver Producto";
    link.classList.add("producto__link");
    element.appendChild(link);

    element.classList.add("productos__item");
    return element;
}

const listStarWars = document.querySelector("[data-list=star-wars]");
const listConsolas = document.querySelector("[data-list=consolas]");
const listaDiversos = document.querySelector("[data-list=diversos]")

const receiveProducts = async () => {
    try{
        const products = await productServices.listProducts();
        products.forEach(product => {
            const newElement = createListElement(product.url_image, product.nombre, product.precio);
            if(product.category == "star wars"){
                listStarWars.appendChild(newElement);
            } else if (product.category == "consolas"){
                listConsolas.appendChild(newElement);
            } else {
                listaDiversos.appendChild(newElement)
            }
        });
    }catch{
        alert("Ups! Ocurrió un error, intente más tarde")
    }
}

receiveProducts();