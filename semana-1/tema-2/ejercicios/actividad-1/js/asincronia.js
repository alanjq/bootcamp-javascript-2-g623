// Paso 1
(() => {

    console.log('Código síncrono.');
    console.log('Inicio.');

    function dos() {
        console.log('Dos.');
    }

    function uno() {
        console.log('Uno.')
        dos()
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();


// Paso 2
(() => {
    console.log('Código Asíncrono');
    console.log('Inicio');

    function dos() {
        console.log('Dos.');
    }

    function uno() {
        console.log('Uno.');

        setTimeout(() => {
            console.log('Uno.');
            dos();
            console.log('Tres.');
        }, 0);
    }

    uno();
    console.log('Fin.');


    // Ejercicio 2
    function cuadradoCallback(valor, resultado) {
        console.log('Inicia Callback');
        console.log(`Callback: ${valor}, ${resultado}`);

        setTimeout(() => {
            return valor * valor
        }, function () {
            const timer = Math.random() * 10000
            return timer
        })
    }

    cuadradoCallback(1, 1)
    cuadradoCallback(2, 4)
    cuadradoCallback(3, 9)

})();
