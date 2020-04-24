// Forma habitual
// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;

console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);

function saludar() {
    return "Hola chic@s";
}

let saludo = () => {
    let a = "Rodrigo";
    let b = 'Chicos';
    return `${a} ${b}`;
}

console.log(`${saludo()}`);

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido}-poder:${deadpool.poder}`

}

console.log(deadpool.getNombre());