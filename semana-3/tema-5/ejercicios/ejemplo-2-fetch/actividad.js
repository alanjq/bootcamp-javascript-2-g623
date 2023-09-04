// Petición usando XML HTTP REQUEST
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

// Usando fetch
fetch(apiUrl)
    .then((resultado)=>resultado.json())
    .then((resultado) => {
        console.log('resultado', resultado);
    })
    .catch((responseError) => {
        console.log('Error', responseError)
    })
