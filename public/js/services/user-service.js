const registeredUsers = () => {
    return fetch("http://localhost:3000/admin-user").then(response => response.json());
}

export const userServices = {
    registeredUsers,
};