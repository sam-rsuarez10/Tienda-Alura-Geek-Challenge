import { productServices } from "../services/product-service.js";

const createListElement = (url, nombre, precio) => {
    const element = document.createElement("li");
    // Creación de los íconos
    const trash_icon = document.createElement("i");
    trash_icon.classList.add("bx", "bxs-trash-alt", "bx-tada-hover");
    
    const pencil_icon = document.createElement("i");
    pencil_icon.classList.add("bx", "bxs-pencil", "bx-tada-hover");

    // Creación del div que contendrá la imagen
    const formatted_url = '.' + url;
    const divImage = document.createElement("div");
    divImage.style.background = `url(${formatted_url}) no-repeat center / cover`;
    divImage.classList.add("producto__imagen");
    // Creación del div que contendrá los íconos
    const divIcon = document.createElement("div");
    divIcon.classList.add("icon__container");
    // Inserción de los iconos al div de íconos
    divIcon.appendChild(trash_icon);
    divIcon.appendChild(pencil_icon);
    // Inserción del div de íconos al div de la imagen
    divImage.appendChild(divIcon);
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

    element.classList.add("productos__item");
    return element;
}


const productsList = document.querySelector("[data-list]");
const receiveProducts = async () => {
    try{
        const products = await productServices.listProducts();
        products.forEach(product => {
            const newElement = createListElement(product.url_image, product.nombre, product.precio);
            productsList.appendChild(newElement);
        });
    }catch{
        alert("Ups! Ocurrió un error, intente más tarde")
    }
}

receiveProducts();