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

    if (unidad1.value == "Kilometro" && unidad2.value== "Kilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Kilometros/s equivalen a " + resultado + "Kilometros/s";
    }
    if (unidad1.value == "Kilometro" && unidad2.value== "Metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Kilometros/s equivalen a " + resultado + "Metro/s";
    }
    if (unidad1.value == "Kilometro" && unidad2.value== "Centimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " Kilometros/s equivalen a " + resultado + "Centimetro/s";
    }

    
    if (unidad1.value == "Metro" && unidad2.value== "Kilometro"){
        resultado = numero / 1;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Kilometro/s";
    }
    if (unidad1.value == "Metro" && unidad2.value== "Metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Metro/s";
    }
    if (unidad1.value == "Metro" && unidad2.value== "Centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Centimetro" && unidad2.value== "Kilometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + "Kilometros/s";
    }
    if (unidad1.value == "Centimetro" && unidad2.value== "Metro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + "Metro/s";
    }
    if (unidad1.value == "Centimetro" && unidad2.value== "Centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + "Centimetro/s";
    }
}
