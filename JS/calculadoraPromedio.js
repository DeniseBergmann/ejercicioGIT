const prompt = require('prompt-sync')();

// Solicitar nombre del alumno y materia
const nombreAlumno = prompt("Ingrese el nombre del alumno:");
const nombreMateria = prompt("Ingrese el nombre de la materia:");

// Función para solicitar una nota hasta que sea válida
function ingresarNota(mensaje) {
    let nota;
    do {
        nota = parseFloat(prompt(mensaje));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log(`Error: La nota debe estar en el rango de 0 a 10. Por favor, ingrese una nota válida.`);
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Solicitar y verificar cada nota utilizando la función
let nota1 = ingresarNota(`Ingrese la primera nota:`);
let nota2 = ingresarNota(`Ingrese la segunda nota:`);
let nota3 = ingresarNota(`Ingrese la tercera nota:`);

// Calcular el promedio de las notas
const promedio = (nota1 + nota2 + nota3) / 3;

// Evaluar si el promedio es mayor o igual a 7
if (promedio >= 7) {
    console.log(`${nombreAlumno}, ¡felicidades! Has aprobado en ${nombreMateria} con un promedio de ${promedio.toFixed(2)}.`);
} else {
    console.log(`${nombreAlumno}, gracias por tu esfuerzo en ${nombreMateria}. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
}