// Petición usando XML HTTP REQUEST
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

function CargaDocumento() {
    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('response', this.response);
        }
    }

    xhttp.open('get', apiUrl)
    xhttp.send()
}

CargaDocumento()
