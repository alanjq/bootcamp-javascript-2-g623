const {ESTADOS, DIAS} = require('./arrays')

test('Debería mostrar que hay 7 días en la semana', () => {
    expect(DIAS).toHaveLength(7)
});

test('Debe haber más de 3 estados.', ()=> {
    expect(ESTADOS).toContain('OTRO')
})
