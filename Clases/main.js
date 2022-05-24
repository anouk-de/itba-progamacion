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

function chequear() {
    let chequeado = document.getElementById("bases").checked
    if(chequeado != true) {
        alert("Debe estar de acuerdo con las condiciones")
} }

//con el .value accedo al valor 
// parseInt() y number() transforma el valor en numérico
// al parseInt() le puedeo cambiarle la base : 0x para hexadecimal(de 16),
// 0 para base octal(de 8), o cadena para base decimal (de 10)
// number() es una clase que llama al tipo de dato

//ECMASCRIPT 6 --> escritura de js y html en simultaneo
//template literal 

function sumar() {
    let valor = document.getElementById("edad").value
    return parseInt(valor) + 1
}

    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value

document.body.append(`el nombre ded usuario es ${nombreUsuario} y va a cumplir ${sumar(edadUsuario)}`)

// query lo podemos para seleccionar algo 
// query = consulta

let parrafos = document.querySelectorAll("p") //puedo sellecionar por etiqueta
console.log(parrafos)
let seleccionarUno = document.querySelectorAll("#titutlar") //puedo seleccionar por id
console.log(seleccionarUno)
let seleccionarClase = document.querySelectorAll(".paises") //puedo seleccionar por clase
console.log(seleccionarClase)
let seleccionarClaseUnico = document.querySelector(".paises")
console.log(seleccionarClaseUnico)



