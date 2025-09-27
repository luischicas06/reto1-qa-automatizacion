
const { test, expect } = require('@playwright/test');
const { generarSecuenciaFibonacci } = require('./fibonacci');

test.describe('Pruebas TDD para generarSecuenciaFibonacci', () => {
    test('n = 1 debe retornar "0"', () => {
        expect(generarSecuenciaFibonacci(1)).toBe("0");
    });

    test('n = 2 debe retornar "01"', () => {
        expect(generarSecuenciaFibonacci(2)).toBe("01");
    });

    test('n = 3 debe retornar "011"', () => {
        expect(generarSecuenciaFibonacci(3)).toBe("011");
    });

    test('n = 7 debe retornar "0112358"', () => {
        expect(generarSecuenciaFibonacci(7)).toBe("0112358");
    });

    test('n = 0 debe retornar cadena vacía', () => {
        expect(generarSecuenciaFibonacci(0)).toBe("");
    });

    test('n negativo debe retornar cadena vacía', () => {
        expect(generarSecuenciaFibonacci(-5)).toBe("");
    });

    test('n = 10 debe retornar "01123581321"', () => {
        expect(generarSecuenciaFibonacci(10)).toBe("01123581321");
    });

    test('n = 15 debe retornar "0112358132134558914423377"', () => {
        expect(generarSecuenciaFibonacci(15)).toBe("0112358132134558914423377");
    });
});
