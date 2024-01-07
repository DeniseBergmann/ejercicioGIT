// Solicitar al usuario el nombre del alumno, la materia correspondiente y las tres notas
var nombreAlumno = prompt("Ingrese el nombre del alumno:");
var materia = prompt("Ingrese la materia correspondiente:");
var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Verificación de las notas dentro del rango (0 a 10)
if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {

    // Cálculo del promedio de las tres notas
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Evaluación del promedio (mayor o igual a 7)
    if (promedio >= 7) {
        console.log(nombreAlumno + ", ¡felicidades! Has aprobado con un promedio de " + promedio.toFixed(2) + ".");
    } else {
        console.log(nombreAlumno + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio.toFixed(2) + ".");
    }
} else {
    console.log("Error: Las notas deben estar en el rango de 0 a 10. Por favor, ingrese notas válidas.");
}

