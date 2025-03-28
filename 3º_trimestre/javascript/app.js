obtener_localstorage();
function obtener_localstorage(){
    if (localStorage.getItem("nombre")) {
        /*localStorage.getItem("nombre") busca en el almacenamiento del navegador una clave llamada "nombre".
        Si la clave "nombre" existe, la condición será true y se ejecutará el bloque de código dentro del if.
        Si no existe, pasamos al else.*/
    let nombre = localStorage.getItem("nombre");
    /*Recupera el valor guardado en localStorage bajo la clave "nombre".
    Lo almacena en la variable nombre.*/ 
    let persona = JSON.parse(localStorage.getItem("persona"));
    /*localStorage.getItem("persona") obtiene el valor guardado bajo la clave "persona", pero este valor es una cadena JSON.
    JSON.parse(...) convierte esa cadena JSON en un objeto JavaScript real.
    Guarda ese objeto en la variable persona.*/ 
    console.log(nombre);
    /*Muestra en la consola el valor de la variable nombre.*/ 
    console.log(persona);
    /*Muestra en la consola el objeto persona recuperado.*/
    } else{
        console.log("No hay entradas en el local storage");
        /*Si la clave "nombre" no existe en localStorage, muestra este mensaje en la consola.*/
    }
}
function guardar_localstorage(){
    let persona = {
        nombre: "Fernando",
        edad:31,
        correo: "xyz@xyz.com",
        coords:{
            lat:10,
            lng:-10
        } 
        /*coords: otro objeto dentro de persona, que almacena:
        lat: un número 10 (latitud).
        lng: un número -10 (longitud).
        */ 
    };
    let nombre ="Juan";
    localStorage.setItem("nombre", nombre);
    /*localStorage.setItem(clave, valor): Esta función guarda un dato en el LocalStorage del navegador.
    "nombre" es la clave bajo la cual se guardará el valor.
    nombre (que tiene el valor "Juan") es el valor que se almacena.*/ 
    
    localStorage.setItem("nombre", JSON.stringify(persona));
    /*localStorage.setItem() es un método que permite almacenar información en el LocalStorage del navegador.
    Toma dos parámetros:
    clave: El nombre bajo el cual se guardará el dato.
    valor: El dato que queremos guardar.
    JSON.stringify() convierte un objeto de JavaScript en una cadena de texto en formato JSON.
    Esto es necesario porque localStorage solo almacena cadenas de texto.
    Si intentamos guardar un objeto directamente, localStorage no podrá manejarlo correctamente.
    */ 
}