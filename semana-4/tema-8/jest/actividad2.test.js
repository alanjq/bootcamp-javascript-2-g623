const lenguajePagina = require('./actividad2')

test('Debe devolver URI en español.', () => {
    expect(lenguajePagina('es-ES')).toBe('/acerca-de-nosotros')
})