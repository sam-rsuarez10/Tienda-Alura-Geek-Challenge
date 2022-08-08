const listProducts = () => {
    return fetch("http://localhost:3000/products").then(response => response.json())
    .catch(() => null);
}

const createProduct = (url_image, category, nombre, precio, description, type) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id: uuid.v4() ,url_image, category, nombre, precio, description, type}),
    }).then(() => true).catch(() => false);
}

export const productServices = {
    listProducts,
    createProduct
}