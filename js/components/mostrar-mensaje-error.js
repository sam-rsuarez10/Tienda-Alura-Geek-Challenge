// Función que retorna el mensaje de error correspondiente al input y a su tipo
export const mostrarErrorMessage = (inputType, input, erroresArray, errorMessages) => {
    let mensaje = "";
    erroresArray.forEach(error => {
        if(input.validity[error]){ // Elemento del error en el objeto validity es true
            mensaje = errorMessages[inputType][error];
        }
    });
    return mensaje;
};