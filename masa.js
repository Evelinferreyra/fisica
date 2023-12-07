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
          case 'Kilogramo':
              resultado *= 1000;
              break;
          case 'Hectogramo':
              resultado *= 100;
              break;
          case 'Decagramo':
              resultado *= 10;
              break;
          case 'gramo':
              // No es necesario hacer nada
              break;
          case 'Decigramo':
              resultado /= 10;
              break;
          case 'Centigramo':
              resultado /= 100;
              break;
          case 'Miligramo':
              resultado /= 1000;
              break;
          default:
              console.error('Unidad no reconocida');
              break;
      }

      switch (unidad2) {
          case 'Kilogramo':
              resultado /= 1000;
              break;
          case 'Hectogramo':
              resultado /= 100;
              break;
          case 'Decagramo':
              resultado /= 10;
              break;
          case 'gramo':
              // No es necesario hacer nada
              break;
          case 'Decigramo':
              resultado *= 10;
              break;
          case 'Centigramo':
              resultado *= 100;
              break;
          case 'Miligramo':
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