const listProducts = () => {
    return fetch("https://challenge-tienda-alura-geek.herokuapp.com/products").then(response => response.json())
    .catch(() => null);
}

const createProduct = (url_image, category, nombre, precio, description, type) => {
    return fetch("https://challenge-tienda-alura-geek.herokuapp.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id: uuid.v4() ,url_image, category, nombre, precio, description, type}),
    })
}

const detailProduct = (id) => {
    return fetch(`https://challenge-tienda-alura-geek.herokuapp.com/products/${id}`).then(response => response.json());
}

const updateProduct = (id, url_image, category, nombre, precio, description) => {
    return fetch(`https://challenge-tienda-alura-geek.herokuapp.com/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({url_image, category, nombre, precio, description})
    })
}

const deleteProduct = (id) => {
    return fetch(`https://challenge-tienda-alura-geek.herokuapp.com/products/${id}`, {
        method: "DELETE"
    });
}

export const productServices = {
    listProducts,
    createProduct,
    detailProduct,
    updateProduct,
    deleteProduct
}