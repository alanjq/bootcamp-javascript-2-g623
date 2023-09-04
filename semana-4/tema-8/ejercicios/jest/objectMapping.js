const objectMapping = {
    ACTIVO: 'Activo',
    INACTIVO: 'Inactivo',
    OBSOLETO: 'Obsoleto'
}

function getObjectDescripcion(tipo) {
    if(!tipo){
        return 'El parámetro -tipo- no existe.'
    }
    return objectMapping[tipo]
}

module.exports = getObjectDescripcion
