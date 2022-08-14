const registeredUsers = () => {
    return fetch("https://challenge-tienda-alura-geek.herokuapp.com/admin-user").then(response => response.json());
}

export const userServices = {
    registeredUsers,
};