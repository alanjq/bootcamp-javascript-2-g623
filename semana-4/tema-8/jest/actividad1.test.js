// Importamos las funciones a probar
const { sumar, restar, multiplicar, dividir } = require('./actividad1');

// El conjunto de pruebas a realizar
describe('Actividad 1: Operaciones matemáticas.', () => {

    // Suma
    test('Probar suma', () => {
        expect(sumar(2, 2)).toBe(4)
    });

    // Resta
    test('Probar resta', () => {
        expect(restar(2, 2)).toBe(0)
    });

    // Multiplicación
    test('Probar Multiplicación', () => {
        expect(multiplicar(5, 5)).toBe(25)
    });

    // División
    test('Probar División', () => {
        expect(dividir(20, 5)).toBe(4)
    });
})
