console.log("Hola")
window.onload = document.getElementById("nombreIngresado").value = 
localStorage.getItem("nameUser")
localStorage.setItem("nameUser", )

function guargarData() {
    let valueIngresado = document.getElementById("nombreIngresado").value
    console.log(valueIngresado)
    sessionStorage.setItem("nameUser", valueIngresado)
}

function borrarData() {
    localStorage.clear()
}

function borrarDato() {
    localStorage.removeItem("nameUser")
}

//JSON JavaScript Object Notation

//Un objeto es un let nombreDeAlgo = { dato1, dato2, dato3}

let profesor = {
    nombre: "Esteban",
    edad: 29,
    trabajando: true
}

//objeto

let alumnos = [{nombre: "Lorenzo", estado:"cursando", notaFinal:1},
{nombre: "Nicolás", estado:"cursando", notaFinal:8},
{nombre: "Tomás", estado:"libre", notaFinal:5}]

//array de objetos

profesorJSON = JSON.stringify(profesor)
console.log(profesorJSON)
console.log(profesor.nombre)
console.log(alumnos)
alumnosJSON = JSON.stringify(alumnos)
console.log(alumnosJSON)
console.log(alumnos[0])
