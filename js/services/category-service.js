const readCategories = () => {
    return fetch("https://challenge-tienda-alura-geek.herokuapp.com/categories").then(response => response.json());
}

export const categoryServices = {
    readCategories
}