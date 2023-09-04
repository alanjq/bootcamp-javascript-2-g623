// Usando `proxy`

// Objeto base `persona`
const persona = {
    nombre: '',
    apellido: '',
    edad: 0
}

const manejador = {
    set(objeto, propiedades, valor) {
        // Validar nombre usando expresión regular
        if (propiedades === 'nombre' || propiedades === 'apellido') {
            const REGEXP = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g
            if (!REGEXP.test(valor)) {
                console.error('Ingresa el nombre usando caracteres válidos.');
            }
        }
        return objeto[propiedades] = valor
    }
}

const personaProxy = new Proxy(persona, manejador)
personaProxy.nombre = "Juan"
personaProxy.apellido = "Perez"
personaProxy.edad = 35

console.log(persona);
