import { productServices } from "../services/product-service.js";

const createListElement = (id, url, nombre, precio, type) => {
    const element = document.createElement("li");
    // Creación de los íconos
    const trash_icon = document.createElement("i");
    trash_icon.classList.add("bx", "bxs-trash-alt", "bx-tada-hover");
    trash_icon.setAttribute("id", id); // se le coloca el id del producto al ícono de basura correspondiente
    
    const link_icon = document.createElement("a");
    link_icon.href = `./update-product.html?id=${id}`;
    const pencil_icon = document.createElement("i");
    pencil_icon.classList.add("bx", "bxs-pencil", "bx-tada-hover");
    link_icon.appendChild(pencil_icon);

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
    // Creación del div que contendrá los íconos
    const divIcon = document.createElement("div");
    divIcon.classList.add("icon__container");
    // Inserción de los iconos al div de íconos
    divIcon.appendChild(trash_icon);
    divIcon.appendChild(link_icon);
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

    trash_icon.addEventListener("click", (event) => {
        event.preventDefault();
        const id_trash = trash_icon.id;
        productServices.deleteProduct(id_trash).then(() => console.log("Eliminado"))
        .catch(() => alert("No se pudo eliminar el producto, intente más tarde"));
    });
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
/*edit_icon.addEventListener("click", () => {
    window.location.href = "../../templates/update-product.html";
});*/