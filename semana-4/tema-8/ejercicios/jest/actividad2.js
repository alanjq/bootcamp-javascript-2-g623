const idiomaIngles = 'en-US'
const idiomaEspanol = 'es-ES'

function lenguajePagina(language) {
    switch (language.toLowerCase()) {
        case idiomaIngles.toLowerCase():
            return '/about-us'

        case idiomaEspanol.toLowerCase():
            return '/acerca-de-nosotros'
    }
    return ''
}

module.exports = lenguajePagina
