// Resultados
let codigosPostales = []
//#region Controles
// Crea una opción para el select y devuelve el string para insertar
const crearOpcion = (valor, etiqueta) => `<option value="${valor}">${etiqueta}</option>`

// Llenar Select de estados y municipios
const llenarSelect = (idSelect, opciones) => {
    const elSelect = document.getElementById(idSelect)
    let allOptions = [crearOpcion('', '----- Todos -----')]

    opciones.map((opcion) => {
        allOptions.push(crearOpcion(opcion.clave, opcion.nombre))
    })

    // Agregar las opciones al HTML del select
    elSelect.innerHTML = allOptions.join('')
}


// Actualiza la tabla para mostrar los resultados
const mostrarResultados = (idMunicipio) => {
    console.log('idMunicipio', codigosPostales)
    let body = ""
    for (let index = 0; index < codigosPostales.length; index++) {
        const fila = codigosPostales[index];
        const columna = {
            codigopostal: fila?.querySelector('d_codigo').textContent || '',
            municipio: fila?.querySelector('D_mnpio').textContent || '',
            estado: fila?.querySelector('d_estado').textContent || '',
            ciudad: fila?.querySelector('d_ciudad')?.textContent || '',
            claveoficina: fila?.querySelector('c_oficina')?.textContent || ''
        }

        body += `<tr>
            <td>${columna.codigopostal}</td>
            <td>${columna.municipio}</td>
            <td>${columna.estado}</td>
            <td>${columna.ciudad}</td>
            <td>${columna.claveoficina}</td>
        </tr>`
    }
    document.getElementById('data').innerHTML = body
}
//#endregion


//#region Llamadas a API
function llenaEstados() {
    fetch('estados.json')
        .then(response => response.json())
        .then((data) => {
            llenarSelect('selectEstado', data)
        })
        .catch(() => {
            console.error('No se pueden traer estados.');
        })
}

function llenaMunicipios(estado) {
    leerDeXML(`cp/${estado}.xml`)
        .then((allTables) => {
            codigosPostales = allTables
            let municipios = []

            for (let index = 0; index < allTables.length; index++) {
                const fila = allTables[index];
                const columna = {
                    clave: fila.querySelector('c_mnpio').textContent,
                    nombre: fila.querySelector('D_mnpio').textContent
                }

                if (!municipios.some((muni) => muni.clave == columna.clave)) {
                    municipios.push(columna)
                }

                // Llenar el select de municipios
                llenarSelect('selectMunicipio', municipios)
            }
        })
}

const leerDeXML = async (url) => {
    return fetch(url)
        .then((response) => response.text())
        .then((data) => {
            let xmlDoc = new window.DOMParser().parseFromString(data, "text/xml")
            if (xmlDoc) {
                return xmlDoc
            }
            else Promise.reject('Falló al obtener xmlDoc')
        })
        .then((xmlDoc) => {
            const alltables = xmlDoc.querySelectorAll('table')
            return alltables
        })
        .catch((razon) => {
            console.error('Error al traer datos de la API', razon);
        })
}

//#endregion

llenaEstados()

//#region Eventos
document.getElementById('selectEstado').addEventListener('change', function (e) {
    llenaMunicipios(e.target.value.toLowerCase())
})

document.getElementById('selectMunicipio').addEventListener('change', function (e) {
    mostrarResultados(e.target.value)
})
//#endregion
