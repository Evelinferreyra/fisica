var valor = document.getElementById("valor");
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change', convertir);

unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change', convertir);

var resultado;

function convertir(){
    if (valor.value == ''){
        return; 
    }
  numero = valor.value;
  numero = parseFloat(numero);

  if (unidad1.value == "Kilogramo" && unidad2.value == "Kilogramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Hectogramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Decagramo") {
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Gramo") {
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Decigramo") {
    resultado = numero * 10000;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Decigramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Centigramo") {
    resultado = numero * 100000;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Centigramos";
  }
  if (unidad1.value == "Kilogramo" && unidad2.value == "Miligramo") {
    resultado = numero * 1000000;
    txtResultado.innerHTML = numero + " Kilogramos equivalen a " + resultado + " Miligramos";
  }

  if (unidad1.value == "Hectogramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Hectogramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Decagramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Gramo") {
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Decigramo") {
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Centigramo") {
    resultado = numero * 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Hectogramo" && unidad2.value == "Miligramo") {
    resultado = numero * 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }

  if (unidad1.value == "Decagramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Hectogramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Decagramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Gramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Decigramo") {
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Centigramo") {
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Decagramo" && unidad2.value == "Miligramo") {
    resultado = numero * 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }

  if (unidad1.value == "Gramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Hectogramo") {
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Decagramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Gramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Decigramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Centigramo") {
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Gramo" && unidad2.value == "Miligramo") {
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }

  if (unidad1.value == "Decigramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Hectogramo") {
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Decagramo") {
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Gramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Decigramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Centigramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Decigramo" && unidad2.value == "Miligramo") {
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }

  if (unidad1.value == "Centigramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 100000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Hectogramo") {
    resultado = numero / 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Decagramo") {
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Gramo") {
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Decigramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Centigramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Centigramo" && unidad2.value == "Miligramo") {
    resultado = numero * 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }

  if (unidad1.value == "Miligramo" && unidad2.value == "Kilogramo") {
    resultado = numero / 1000000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Kilogramos";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Hectogramo") {
    resultado = numero / 100000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Hectogramos";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Decagramo") {
    resultado = numero / 10000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Decagramos";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Gramo") {
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + " Gramos";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Decigramo") {
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Decigramo";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Centigramo") {
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
  if (unidad1.value == "Miligramo" && unidad2.value == "Miligramo") {
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Hectogramos equivalen a " + resultado + "Centigramo";
  }
}