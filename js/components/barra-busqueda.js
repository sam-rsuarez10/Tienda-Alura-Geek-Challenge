const boton_busqueda = document.querySelector("[data-busqueda=icono]");
const input_busqueda = document.querySelector("[data-busqueda=input]");


boton_busqueda.addEventListener("click", () => {
    // la respuesta será un array con los nombres de todos los productos
    const searchContent = document.querySelector("[data-busqueda=input]").value;
    const htmlElements = document.getElementsByClassName("productos__item"); // colección html de cada producto
    const elementsArray = Array.from(htmlElements); // conversión de la colección html a un arreglo
    if(searchContent){
        elementsArray.forEach(element => {
            let elementAtributtes = element.childNodes; // elementos hijos del elemento li del producto
            let nombreProducto = elementAtributtes[1].textContent;
            let expression = new RegExp(searchContent, "i");

            if(!expression.test(nombreProducto)){
                // no hay match entre el input y el nombre del producto correspondiente
                element.style.display = "none";
            } else {
                element.style.display = "flex";
            }
        });
    } else {
        elementsArray.forEach(element => {
            element.style.display = "flex";
        })
    }
});


input_busqueda.addEventListener("blur", () => {
    if(input_busqueda.value == 0){
        // El input está vacío
        const htmlElements = document.getElementsByClassName("productos__item"); // colección html de cada producto
        const elementsArray = Array.from(htmlElements); // conversión de la colección html a un arreglo
        elementsArray.forEach(element => {
            element.style.display = "flex";
        })
    }
});