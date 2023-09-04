// Crear tabla
const dibujarTabla = (datos) => {
    const columnas = ['ID', 'Nombre', 'Email', 'Comentario']

    let htmlTabla = dibujarTablaCompleta(columnas, datos)

    document.querySelector('#app').innerHTML = htmlTabla
}

const dibujarTablaCompleta = (columnas, datos) => {
    const htmlColumnas = columnas.join('</th><th>')

    const filas = datos.map((fila)=>dibujarFila(fila))

    return `<table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>
                        ${htmlColumnas}
                    </th>
                </tr>
            </thead>
            <tbody>${filas}</tbody>
        </table>`
}

const dibujarFila = (fila) => {
    return `<tr>
                <td>${fila['id']}</td>
                <td>${fila['name']}</td>
                <td>${fila['email']}</td>
                <td>${fila['body']}</td>
            </tr>`
}

// Peticiones
const xhr = new XMLHttpRequest()
const METODO = 'GET'
const APIURL = 'https://jsonplaceholder.typicode.com'
const ENDPOINT = `${APIURL}/comments`

function onEventHandler() {
    if (this.readyState === 4 && this.status == 200) {
        // Convertir resultado a un objeto manejable
        const resultado = JSON.parse(this.response)
        console.log(resultado);
        dibujarTabla(resultado)
    }
}

// Llamar a la función
xhr.addEventListener('load', onEventHandler)

xhr.open(METODO, ENDPOINT)
xhr.send()
