console.log("Soy externo")
// Para acceder a un id
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)
// Para acceder a una clase
let parrafo2 = document.getElementsByClassName("pConClass")
console.log(parrafo2)
// Para buscar todos los elementos con la misma etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

// Cambiar texto con un botón
function cambiarTitular() {
    let titular1 = document.getElementById("titular")
    titular1.innerText = "Otra cosa"
}

function hacerAparecer() {
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = "<h2> BU!! </b2> <p> Aparecí de la nada </p>"
    contenedor.className = "titularSecundario"
    // además de crearlo desde cero puedo AÑADIR un elemento
    let texto = "Hola"
    contenedor.append(texto)
}

// para que no desaparezca el botón lo unico que tengo que hacer es 
// incluirlo en el contenedor.innerHTML

let paises = document.getElementsByClassName("paises")
    console.log(paises)

function borrarPais() {
    let paises = document.getElementsByClassName("paises")
    console.log(paises)
    paises[0].remove() //se creó un array con los elementos de la misma clase
}

function sumarEdad() {
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
        document.body.append("El nombre del usuario es " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario) + 1) )
}
//con el .value accedo al valor 
// parseInt() y number() transforma el valor en numérico
// al parseInt() le puedeo cambiarle la base : 0x para hexadecimal(de 16),
// 0 para base octal(de 8), o cadena para base decimal (de 10)
// number() es una clase que llama al tipo de dato






