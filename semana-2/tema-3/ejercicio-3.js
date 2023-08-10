// Usando `generador`

const cuadrado = (valor) => {
    const objeto = {
        valor,
        resultado: (valor * valor)
    }
    return objeto
}

function* generador() {
    console.log('Inicia generador.');
    cuadrado(0) // ?
    cuadrado(1) // ?
    cuadrado(2) // ?
    cuadrado(3) // ?
    cuadrado(4) // ?
    cuadrado(5) // ?
    console.log('Termina generador.');
}

// imprimimos el resultado de cada generador
const gen = () => generador()
for (const item of gen()) {
    console.log(item);
}
