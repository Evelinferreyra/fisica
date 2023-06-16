var valor = document.getElementById("valor");
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change', convertir)

unidad2 = document.getElementById("unidad2");
unidad2.addEventListener('change', convertir)

var resultado;

function convertir(){
    if (valor.value == ''){
        return; 
    }
    numero = valor.value;
    numero = parseFloat(numero);

    if (unidad1.value == "Kilogramo" && unidad2.value== "Kilogramo"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Kilogramo/s equivalen a " + resultado + "Kilogramo/s";
    }
    if (unidad1.value == "Kilogramo" && unidad2.value== "Gramo"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + "Gramo/s";
    }
    if (unidad1.value == "Kilogramo" && unidad2.value== "Centigramo"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " Kilogramo/s equivalen a " + resultado + "Centigramo/s";
    }

    
    if (unidad1.value == "Gramo" && unidad2.value== "Kilogramo"){
        resultado = numero / 1;
        txtResultado.innerHTML = numero + " Gramo/s equivalen a " + resultado + "Kilogramo/s";
    }
    if (unidad1.value == "Gramo" && unidad2.value== "Gramo"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Gramo/s equivalen a " + resultado + "Gramo/s";
    }
    if (unidad1.value == "Gramo" && unidad2.value== "Centigramo"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " Gramo/s equivalen a " + resultado + "Centigramo/s";
    }


    if (unidad1.value == "Centigramo" && unidad2.value== "Kilogramo"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " Centigramo/s equivalen a " + resultado + "Kilogramo/s";
    }
    if (unidad1.value == "Centigramo" && unidad2.value== "Gramo"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " Centigramo/s equivalen a " + resultado + "Gramo/s";
    }
    if (unidad1.value == "Centigramo" && unidad2.value== "Centigramo"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Centigramo/s equivalen a " + resultado + "Centigramo/s";
    }
}
