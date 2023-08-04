function cuadradoPromesa(valor) {
    if (isNaN(valor)) {
        return Promise.reject(`Error. El valor (${valor}) no es un número.`)
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                valor,
                resultado: valor * valor
            })
        }, 5000);
    })
}

cuadradoPromesa(0)
    .then(({ valor, resultado }) => {
        console.log('Inicia promesa');
        console.log(`Promesa: ', ${valor}, ${resultado}`);

        cuadradoPromesa(2)
            .then(resultado2 => {
                console.log('Inicia promesa 2');
                console.log(`Promesa2: ', ${resultado2.valor}, ${resultado2.resultado}`);

                cuadradoPromesa(3)
                    .then(promesa3 => {
                        console.log('Inicia promesa 3');
                        console.log(`Promesa 3: ', ${promesa3.valor}, ${promesa3.resultado}`);

                        cuadradoPromesa(4)
                            .then(resultado4 => {
                                console.log('Inicia promesa 4');
                                console.log(`Promesa 4: ', ${resultado4.valor}, ${resultado4.resultado}`);

                                cuadradoPromesa(5)
                                    .then(resultado5 => {
                                        console.log('Inicia promesa 5');
                                        console.log(`Promesa 5: ', ${resultado5.valor}, ${resultado5.resultado}`);
                                    })
                            })
                    })
            })
    })
    .catch((reason) => {
        console.log('ERROR:', reason);
    })


// Ejercicio 4
async function functionAsincronaDeclarada(){
    try {
        let obj = await cuadradoPromesa(0)
        console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
    } catch (error) {
        
    }
}

functionAsincronaDeclarada()
