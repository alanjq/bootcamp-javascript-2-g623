// Ejercicio 2 - Devolver anagramas (usando `for`)
const limpiaAnagrama = (arr) => {
    let obj = {};
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        let ordenado = item.toLowerCase().split('').sort().join('');
        obj[ordenado] = arr[index];
    }
    return Object.values(obj);
}

const INPUT_ARRAY = ["ropa"]
limpiaAnagrama(INPUT_ARRAY) // ?
