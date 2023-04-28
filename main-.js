// Primer ejercicio
let miNombre ="Natalia"


// Segundo ejercicio
let miApellido ="Requena"


// Tercer ejercicio
let miEdad = 25


// Cuarto ejercicio
let miMascota = "Canela"


// Quinto ejercicio
let edadMascota = 12


// Sexto ejercicio
console.log (miNombre)
console.log (miApellido)
console.log(miEdad)
console.log (miMascota)
console.log (edadMascota)

// Septimo ejercicio
const nombreCompleto = miNombre + " " + miApellido
console.log (nombreCompleto)

// Octavo ejercicio
let textoPresentacion = ("Mi nombre completo es" + " " + miNombre + " " + miApellido + " " + "tengo" + " " + miEdad + " " + "años" + " y una perrita llamada" + " " + miMascota + " " + "que tiene" + " "+ edadMascota + " " +"años")

console.log (textoPresentacion)


// Noveno ejercicio
// Suma

function sumar (numA, numB) {

    console.log (numA);
    console.log (numB);

    let resultado = numA + numB

    return resultado
}

let resultadoSumaEdades = sumar (miEdad, edadMascota)
console.log (resultadoSumaEdades)

// Resta

function restar (numA, numB) {

    console.log (numA);
    console.log (numB);

    let resultado = numA - numB

    return resultado
}


let resultadoRestaEdades = restar (miEdad, edadMascota)
console.log (resultadoRestaEdades)

// Producto edades

function producto (numA, numB) {

    console.log (numA);
    console.log (numB);

    let resultado = numA * numB

    return resultado
}

let resultadoProductoEdades = producto (miEdad, edadMascota)
console.log (resultadoProductoEdades)

// Division
function division (numA, numB) {

    console.log (numA);
    console.log (numB);

    let resultado = numA / numB

    return resultado
}

let resultadoDivisionEdades = division (miEdad, edadMascota)
console.log (resultadoDivisionEdades)


// Decimo ejercicio

let textoPresentacionDos = ("Mi nombre completo es" + " " + miNombre + " " + miApellido + " " + "tengo" + " " + miEdad + " " + "años" + " y una perrita llamada" + " " + miMascota + " " + "que tiene" + " "+ edadMascota + " " +"años" + " " + "sumando nuestras edades da" + " " + resultadoSumaEdades + " " + "años," + " " + "restando nuestras edades da" + " " + resultadoRestaEdades + " " + "años," + " " + "multiplicando nuestras edades da" + " " + resultadoProductoEdades + " " + "años," + " " + " y dividiendo nuestras edades da" + " " + resultadoDivisionEdades + " " + "años,")
console.log (textoPresentacionDos)