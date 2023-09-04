// Ejercicio 2 - Devolver anagramas (usando `for`)
const limpiaAnagramaMap = (arr) => {
    let mapa = new Map()
    for (const item of arr) {
        let ordenado = item.toLowerCase().split('').sort().join('');
        mapa.set(ordenado, item)
    }
    return Array.from(mapa)
}

const INPUT_ARRAY = [
    "roma",
    "amor",
    "mora",
    "sopa",
    "paso",
    "sapo",
    "ropa",
    "paro",
    "proa",
];

limpiaAnagramaMap(INPUT_ARRAY) // ?
