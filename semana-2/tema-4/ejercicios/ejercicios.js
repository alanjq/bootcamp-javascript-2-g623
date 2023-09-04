// Ejericio 1 - pelicula.js
// {id, titulo, director, estreno, pais, generos, calificacion}.
class Pelicula {

    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = this.validarIMDB(id) ? id : ''
        this.titulo = this.validarTitulo('Título', titulo, 100) ? titulo : ''
        this.director = this.validarDirector('Director', director, 50) ? director : ''
        this.estreno = this.validarEstreno(estreno) ? estreno : ''
        this.pais = this.validarPais(pais) ? pais : []
        this.generos = this.validarGeneros(generos)? generos : []
        this.calificacion = calificacion
    }

    //#region Métodos genéricos
    validarCadena(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" esta vacío.`);
            return false;
        }
        if (typeof valor !== 'string') {
            console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto.`);
            return false;
        }
        return true
    }

    // Validar longitud de cadena titulo y director
    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            console.error(`${propiedad} "${valor}" excede el número de carecteres permitidos (${longitud}).`);
            return false;
        }
        return true;
    }

    // Validar números
    validarNumero(propiedad, valor) {
        if (!valor) {
            console.error(`${propiedad} "${valor}" está vacío.`);
            return false;
        }
        if (isNaN(valor)) {
            console.error(`${propiedad} "${valor}" no es un número.`);
            return false;
        }
        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) {
            console.warn(`El valor ${propiedad} está vacío.`);
            return false;
        }
        if (!Array.isArray(valor)) {
            console.error(`El valor de "${propiedad}" no es un array válido.`);
            return false;
        }
        if (valor.length === 0) {
            console.error(`El array ${propiedad} esta vacío.`);
            return false;
        }
        return valor.filter((item) => this.validarCadena(item)).length === 0
    }
    //#endregion


    //#region Métodos específicos
    validarIMDB(id) {
        // Validar que tenga dos letras
        if (this.validarCadena('id', id)) {
            const VALIDAR_DOS_LETRAS_SIETE_NUMEROS = new RegExp(/^([a-z]){2}([0-9]){7}$/)
            if (!VALIDAR_DOS_LETRAS_SIETE_NUMEROS.test(id)) {
                console.error(`IMBD id ${id} no es un válido, debe tener nueve caracteres, los dos primeros deben ser letras y los siete restantes números.`);
                return false;
            }
        }
        return true;
    }

    validarTitulo(titulo) {
        if (this.validarCadena('Título', titulo)) {
            if (this.validarLongitudCadena('Título', titulo, 100)) {
                return true;
            }
        }
        return false;
    }

    validarDirector(director) {
        if (this.validarCadena('Director', director)) {
            if (this.validarLongitudCadena('Director', director, 50)) {
                return true;
            }
        }
        return false;
    }

    validarEstreno(estreno) {
        if (this.validarNumero('Año de estreno', estreno)) {
            const REGEXP_YEAR = new RegExp(/([0-9]){4}/)
            if (!this.validarLongitudCadena('Año de estreno', "" + estreno, 4)) {
                console.error(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 dígitos.`);
                return false
            }

            if (!REGEXP_YEAR.test(estreno)) {
                console.error('Año de estreno no es válido.');
                return false;
            }
        }
        return true;
    }
    //#endregion

    validarPais(pais) {
        return this.validarArreglo('País', pais)
    }

    static getListaGeneros() {
        return ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"]
    }

    static generosAceptados() {
        console.info('Los géneros aceptados son.', this.getListaGeneros().join(', '))
    }

    validarGeneros(generos){
        if(this.validarArreglo('Géneros', generos)){
            generos.forEach(genero => {
                // Validar cada género del array
                if(! Pelicula.getListaGeneros().includes(genero)){
                    return false
                }
            });
        }
        return false
    }
}

const pelicula1 = new Pelicula({
    id: 'sd1234567',
    director: 'Giovanni',
    titulo: 'Andrés Regalado',
    estreno: 1290,
    pais: ['México'],
    generos: ['Action']
})

console.table(pelicula1)
