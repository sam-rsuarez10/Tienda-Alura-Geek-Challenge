const readCategories = () => {
    return fetch("http://localhost:3000/categories").then(response => response.json());
}

export const categoryServices = {
    readCategories
}