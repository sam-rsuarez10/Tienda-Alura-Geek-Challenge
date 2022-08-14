import { productServices } from "../services/product-service.js";

const createListElement = (id, url, nombre, precio, type) => {
    const element = document.createElement("li");
    // Creación del div que contendrá la imagen
    const divImage = document.createElement("div");
    if(type == "default"){
        // Es un producto preestablecido
        const formatted_url = '.' + url;
        divImage.style.background = `url(${formatted_url}) no-repeat center / cover`;
    } else {
        // Es un producto creado por el usuario
        divImage.style.background = `url(${url}) no-repeat center / cover`;
    }
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
    element.classList.add("productos__item");
    return element;
}


const productsList = document.querySelector("[data-list]");
const receiveProducts = async () => {
    try{
        const products = await productServices.listProducts();
        if (products != null) {
            products.forEach(product => {
                const newElement = createListElement(product.id, product.url_image, product.nombre, product.precio, product.type);
                productsList.appendChild(newElement);
            });
        } else {
            throw new Error();
        }
    }catch{
        alert("Ups! Ocurrió un error, intente más tarde")
    }
}

receiveProducts();