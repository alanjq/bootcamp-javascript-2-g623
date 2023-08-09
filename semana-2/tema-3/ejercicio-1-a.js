// Ejercicio 1
// Eliminar elementos duplicados de un array
const quitarDuplicados = (arr) => {
    // Si `arr` es indefinido
    if (!arr) {
        console.warn('No ingresaste un arreglo.');
    }

    // Si `arr` no es un arreglo
    if (!Array.isArray(arr)) {
        console.warn('El valor que ingresate no es un arreglo.');
    }

    if (arr.length === 0) {
        console.error('El arreglo está vacío.')
    }

    if (arr.length === 1) {
        console.error("Se requieren dos valores")
    }

    // Respuesta
    const respuesta = {
        arr,
        sinDuplicados: arr.filter((valor, indice, self) => self.indexOf(valor) == indice)
    }

    console.info(respuesta)
}

// Casos de prueba
quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["10", "X", "X", "2", "10", 10, true, true]);
