// Código ECMAScript 2015
// Ejemplo 1
const array = [1, 2, 3];


// Ejemplo 2
const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
}


// Ejemplo 3
function add(a = 5, b = 10) {
    return a + b;
}
console.log(add());


// Ejemplo 4
var add2 = (a, b) => {
    return a + b;
}


// Ejemplo 5
function* Hola() {
    yield 'Hola Gabriela';
    yield 'Hola Rocio';
    yield 'Hola Andrea';
}

var helloInstance = Hola();
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next())
