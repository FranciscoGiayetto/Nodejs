// Importamos las funciones 'sumar' y 'restar' desde el archivo 'operaciones.js'
const { sumar, restar } = require('./sumasyresta');

// Utilizamos las funciones 'sumar' y 'restar'
const resultadoSuma = sumar(5, 3);
const resultadoResta = restar(5, 3);

// Mostramos los resultados por consola
console.log('El resultado de la suma es:', resultadoSuma);
console.log('El resultado de la resta es:', resultadoResta);
