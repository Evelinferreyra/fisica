// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Función para realizar la conversión de unidades
    function convertirUnidades() {
        // Obtener los valores seleccionados
        const unidad1 = document.getElementById('unidad1').value;
        const unidad2 = document.getElementById('unidad2').value;
        const valor = parseFloat(document.getElementById('valor').value);

        // Realizar la conversión
        let resultado = valor;

        // Lógica de conversión (agrega más casos según sea necesario)
        switch (unidad1) {
            case 'Kilometro':
                resultado *= 1000;
                break;
            case 'Hectometro':
                resultado *= 100;
                break;
            case 'Decametro':
                resultado *= 10;
                break;
            case 'metro':
                // No es necesario hacer nada
                break;
            case 'Decimetro':
                resultado /= 10;
                break;
            case 'Centimetro':
                resultado /= 100;
                break;
            case 'Milimetro':
                resultado /= 1000;
                break;
            default:
                console.error('Unidad no reconocida');
                break;
        }

        switch (unidad2) {
            case 'Kilometro':
                resultado /= 1000;
                break;
            case 'Hectometro':
                resultado /= 100;
                break;
            case 'Decametro':
                resultado /= 10;
                break;
            case 'metro':
                // No es necesario hacer nada
                break;
            case 'Decimetro':
                resultado *= 10;
                break;
            case 'Centimetro':
                resultado *= 100;
                break;
            case 'Milimetro':
                resultado *= 1000;
                break;
            default:
                console.error('Unidad no reconocida');
                break;
        }

        // Mostrar el resultado
        document.getElementById('resultado').innerText = resultado.toFixed(2);
    }

    // Agregar un evento de cambio a los selectores y al input
    document.getElementById('unidad1').addEventListener('change', convertirUnidades);
    document.getElementById('unidad2').addEventListener('change', convertirUnidades);
    document.getElementById('valor').addEventListener('input', convertirUnidades);

    // Llamar a la función inicialmente para mostrar un resultado predeterminado
    convertirUnidades();
});