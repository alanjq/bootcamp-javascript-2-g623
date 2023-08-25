const getObjectDescripcion = require('./objectMapping')

test('Garantiza que getObjectDescripcion exista.', () => {
    expect(getObjectDescripcion).toBeDefined()
})

test('Usar getObjectDescripcion con un parámetro existente.', () => {
    expect(getObjectDescripcion('ACTIVO')).toBe('Activo')
})

test('Usar getObjectDescripcion con un parámetro inexistente.', () => {
    expect(getObjectDescripcion('NINGUNO')).toBeUndefined()
})

test('Usar getObjectDescripcion con un parámetro vacío.', () => {
    expect(getObjectDescripcion('')).toBe('El parámetro -tipo- no existe.')
})
test('Usar getObjectDescripcion sin parámetros.', () => {
    expect(getObjectDescripcion()).toBe('El parámetro -tipo- no existe.')
})
