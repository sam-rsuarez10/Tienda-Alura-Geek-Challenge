import { userServices } from "../services/user-service.js";

// Función que autentica el login del usuario con la info almacenada en el server
export const authenticate = async (email, password) => {
    try{
        // se busca la info almacenda del usuario administrador
        const main_user_data = await(userServices.registeredUsers());
        // Al recoger la info del server se desencripta la contraseña obtenida
        const password_desencriptada = desencriptar_password(main_user_data.password);
        if(email == main_user_data.email && password == password_desencriptada){
            // Usuario autenticado
            return true;
        } else {
            return false;
        }
    }catch{
        return false;
    }
}

// Función que desencripta la password almacenada en el server
const desencriptar_password = (password) => {
    let index = 0; // indice para recorrer los caracteres del texto
    let decrypted_message = '';
    // Recorrer string y proceso de desencriptacion
    while(index < password.length){
        if(index >= password.length){
            break;
        }
        let character = password[index];
        if(character == 'a'){
            decrypted_message += character;
            index += 2; // se pasa por alto el caracter del código de encriptación restante "i"
        }
        else if(character == 'e'){
            decrypted_message += character;
            index += 5; // se pasa por alto los caracteres del código de encriptación restantes "nter"
        }
        else if(character == 'i' || character == 'o' || character == 'u'){
            /* Como la longitud del código de encriptación es la misma para la 'i', 'o', 'u',
            se utiliza el mismo else if */
            decrypted_message += character;
            index += 4;
        }
        else{
            decrypted_message += character;
            index += 1;
        }
    }
    return decrypted_message;
}
