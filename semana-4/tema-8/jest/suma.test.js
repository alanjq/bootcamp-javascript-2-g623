const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
    const resultadoSuma = suma(1, 2)

    expect(resultadoSuma).toBe(3)

    expect(resultadoSuma).toBeGreaterThan(2)

    expect(resultadoSuma).toBeGreaterThanOrEqual(3)
});



// const value = 2 + 2; expect(value).toBeGreaterThan(3); expect(value).toBeGreaterThanOrEqual(3.5); expect(value).toBeLessThan(5); expect(value).toBeLessThanOrEqual(4.5);
// // toBe y toEqual son equivalentes al usar números
// expect(value).toBe(4);
// expect(value).toEqual(4);