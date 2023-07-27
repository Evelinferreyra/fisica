 
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
  
  
     if (unidad1.value == "Kilolitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Kilolitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero * 10; 
             txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Kilolitro" && unidad2.value== "Decalitro"){ 
         resultado = numero * 100; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "Kilolitro" && unidad2.value== "litro"){ 
         resultado = numero * 1000; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Kilolitro" && unidad2.value== "Decilitro"){ 
         resultado = numero * 10000; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Decílitro/s"; 
     } 
     if (unidad1.value == "Kilolitro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 100000; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Kilolitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 1000000; 
         txtResultado.innerHTML = numero + " Kilolitro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
  
     if (unidad1.value == "Hectolitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 10; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Hectolitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero * 1 
             txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Hectolitro" && unidad2.value== "Decalitro"){ 
         resultado = numero * 10; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Decilitro/s"; 
     }    
     if (unidad1.value == "Hectolitro" && unidad2.value== "litro"){ 
         resultado = numero * 100; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Hectolitro" && unidad2.value== "Decilitro"){ 
         resultado = numero * 1000; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Decílitro/s"; 
     } 
     if (unidad1.value == "Hectolitro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 10000; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Hectolitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 100000; 
         txtResultado.innerHTML = numero + " Hectolitro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
  
     if (unidad1.value == "Decalitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 100; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Decalitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero / 10; 
             txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Decalitro" && unidad2.value== "Decilitro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "Decalitro" && unidad2.value== "litro"){ 
         resultado = numero * 10; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Decalitro" && unidad2.value== "Decilitro"){ 
         resultado = numero * 100; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + "Decílitro/s"; 
     } 
     if (unidad1.value == "Decalitro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 1000; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Decalitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 10000; 
         txtResultado.innerHTML = numero + " Decalitro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
  
  
     if (unidad1.value == "litro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 1000; 
         txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "litro" && unidad2.value== "Hectolitro"){ 
             resultado = numero / 100; 
             txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "litro" && unidad2.value== "Decalitro"){ 
         resultado = numero / 10; 
         txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "litro" && unidad2.value== "litro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "litrl" && unidad2.value== "Decilitro"){ 
         resultado = numero * 10; 
         txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Decílitro/s";
 
     } 
     if (unidad1.value == "litro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 100; 
         txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "litro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 1000; 
         txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
  
  
     if (unidad1.value == "Decilitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 10000; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Decilitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero / 1000; 
             txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Decilitro" && unidad2.value== "Decalitro"){ 
         resultado = numero / 100; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "Decilitro" && unidad2.value== "litro"){ 
         resultado = numero / 10; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Decilitro" && unidad2.value== "Decilitro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Decílitro/s"; 
     } 
     if (unidad1.value == "Decilitro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 10; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Decilitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 100; 
         txtResultado.innerHTML = numero + " Decilitro/s equivalen a " + resultado + " Mililitros/s"; 
     } 
  
  
     if (unidad1.value == "Centilitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 100000; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Centilitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero / 10000; 
             txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Centilitro" && unidad2.value== "Decalitro"){ 
         resultado = numero / 1000; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "Centilitro" && unidad2.value== "litro"){ 
         resultado = numero / 100; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Centilitro" && unidad2.value== "Decilitro"){ 
         resultado = numero / 10; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Decílitro/s"; 
     } 
     if (unidad1.value == "Centilitro" && unidad2.value== "Centilitro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Centilitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 10; 
         txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
  
  
     if (unidad1.value == "Mililitro" && unidad2.value== "Kilolitro"){ 
         resultado = numero / 1000000; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Kilolitro/s"; 
     } 
     if (unidad1.value == "Mililitro" && unidad2.value== "Hectolitro"){ 
             resultado = numero / 100000; 
             txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Hectólitro/s"; 
     } 
     if (unidad1.value == "Mililitro" && unidad2.value== "Decalitro"){ 
         resultado = numero / 10000; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Decálitro/s"; 
     }    
     if (unidad1.value == "Mililitro" && unidad2.value== "litro"){ 
         resultado = numero / 1000; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " litro/s"; 
     } 
     if (unidad1.value == "Mililitro" && unidad2.value== "Decilitro"){ 
         resultado = numero / 100; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Decílitro/s"; 
     } 
     if (unidad1.value == "Mililitro" && unidad2.value== "Centilitro"){ 
         resultado = numero / 10; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Centílitro/s"; 
     } 
     if (unidad1.value == "Mililitro" && unidad2.value== "Mililitro"){ 
         resultado = numero * 1; 
         txtResultado.innerHTML = numero + " Mililitro/s equivalen a " + resultado + " Mililitro/s"; 
     } 
  
 }
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
    //---------------------kilolitro----------------------------//

    if (unidad1.value == "Kilolitro" && unidad2.value== "Kilolitro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Kilogramo/s equivalen a " + resultado + "Kilolitros/s";
    }
    if (unidad1.value == "Kilolitro" && unidad2.value== "litro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Kilolitros/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "Kilolitro" && unidad2.value== "Centilitro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " Kilolitros/s equivalen a " + resultado + "Centilitro/s";
    }
    if (unidad1.value == "kilolitro" && unidad2.value== "Decalitro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " Kilolitros/s equivalen a " + resultado + "Decalitro/s";
    }
    if (unidad1.value == "kilolitro" && unidad2.value== "mililitro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero + " kilolitro/s equivalen a " + resultado + "mililitros/s";
    }
    if (unidad1.value == "kilolitro" && unidad2.value== "decilitro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " kilolitro/s equivalen a " + resultado + "decilitro/s";
    }
    if (unidad1.value == "kilolitro" && unidad2.value== "hectolitros"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " kilolitro/s equivalen a " + resultado + "hectolitro/s";
    }

//-------------------kilolitro------------------------------------//
    
//--------------------------litro---------------------------------//  
    if (unidad1.value == "litro" && unidad2.value== "Kilolitro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "Kilolitro/s";
    }
    if (unidad1.value == "litro" && unidad2.value== "litro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "litro" && unidad2.value== "Centilitro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "Centilitro/s";
    }
    if (unidad1.value == "litro" && unidad2.value== "hectolitro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "hectolitro/s";
    }
    if (unidad1.value == "litro" && unidad2.value== "decilitro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "decilitro/s";
    }
    
    if (unidad1.value == "litro" && unidad2.value== "decalitro"){
        resultado = numero *1000;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "decalitro/s";
    
    }
    
    if (unidad1.value == "litro" && unidad2.value== "mililitro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " litro/s equivalen a " + resultado + "mililitro/s";
    }
    //-------------------------litro-------------------------------------//
    //----------------------------centilitro---------------------------
    
        if (unidad1.value == "Centilitro" && unidad2.value== "Kilolitro"){
            resultado = numero / 100000;
            txtResultado.innerHTML = numero + " Centilitros/s equivalen a " + resultado + "Kilolitros/s";
        }
        if (unidad1.value == "Centilitro" && unidad2.value== "litro"){
            resultado = numero / 100;
            txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + "litro/s";
        }
        if (unidad1.value == "Centilitro" && unidad2.value== "Centilitro"){
            resultado = numero * 1;
            txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + "Centiltro/s";  
        }
    
        if (unidad1.value == "centilitro" && unidad2.value== "hectaltro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " centilitro/s equivalen a " + resultado + "hectalitro/s";
    
    }
    
    if (unidad1.value == "centilitro" && unidad2.value== "mililitro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " centilitro/s equivalen a " + resultado + "mililitro/s";
    }
    if (unidad1.value == "centilitro" && unidad2.value== "decalitro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " centilitro/s equivalen a " + resultado + "decalitro/s";
    }
    if (unidad1.value == "centilitro" && unidad2.value== "deciloitro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " centilitro/s equivalen a " + resultado + "decilitro/s";
    }



//-----------------------centilitro-----------------------------//

    if (unidad1.value == "hectolitro" && unidad2.value== "Kilolitro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " hectolitro/s equivalen a " + resultado + "Kilolitros/s";
    }
    if (unidad1.value == "hectolitro" && unidad2.value== "litro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " hectolitro/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "hectolitro" && unidad2.value== "Centilitro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + "Centiltro/s";
    }

    
    if (unidad1.value == "hectolitro" && unidad2.value== "decalitro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " hectolitro/s equivalen a " + resultado + "decalitro/s";
    }
    if (unidad1.value == "hectolitro" && unidad2.value== "mililitro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " hectolitro/s equivalen a " + resultado + "mililitros/s";
    }
    if (unidad1.value == "hectolitro" && unidad2.value== "decilitro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " hectolitro/s equivalen a " + resultado + "decilitro/s";
    }

    //----------------------decilitro---------------------------------------//
    if (unidad1.value == "decilitro" && unidad2.value== "Kilolitro"){
        resultado = numero / 10000;
        txtResultado.innerHTML = numero + " decilitro/s equivalen a " + resultado + "Kilolitros/s";
    }
    if (unidad1.value == "decilitro" && unidad2.value== "litro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " decilitro/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "decilitro" && unidad2.value== "Centilitro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + "Centiltro/s";  
    }

    if (unidad1.value == "decilitro" && unidad2.value== "hectaltro"){
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " decilitro/s equivalen a " + resultado + "hectalitro/s";
    }

    if (unidad1.value == "decilitro" && unidad2.value== "mililitro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " decilitro/s equivalen a " + resultado + "mililitro/s";
    }
    if (unidad1.value == "decilitro" && unidad2.value== "decalitro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " decilitros/s equivalen a " + resultado + "decalitro/s";
    }
    if (unidad1.value == "decilitro" && unidad2.value== "decilitro"){
        resultado = numero / 1;
        txtResultado.innerHTML = numero + " decilitros/s equivalen a " + resultado + "decilitro/s";
    }
    //------------------------------------decilitro----------------------------------//
    if (unidad1.value == "decalitro" && unidad2.value== "Kilolitro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "Kilolitros/s";
    }
    if (unidad1.value == "decalitro" && unidad2.value== "litro"){
        resultado = numero *1;
        txtResultado.innerHTML = numero + " Centilitro/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "decalitro" && unidad2.value== "Centilitro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "Centiltro/s";  
    }
    
    if (unidad1.value == "decalitro" && unidad2.value== "hectaltro"){
    resultado = numero / 10;
    txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "hectalitro/s";
    
    }
    
    if (unidad1.value == "decalitro" && unidad2.value== "mililitro"){
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "mililitro/s";
    }
    if (unidad1.value == "decalitro" && unidad2.value== "decalitro"){
    resultado = numero / 1;
    txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "decalitro/s";
    }
    if (unidad1.value == "decalitro" && unidad2.value== "deciloitro"){
    resultado = numero * 100;
    txtResultado.innerHTML = numero + " decalitro/s equivalen a " + resultado + "decilitro/s";
    }
    //---------------------------------decalitro----------------------//
    //-----------------------------mililitro---------------------------//
    if (unidad1.value == "mililitro" && unidad2.value== "Kilolitro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "Kilolitros/s";
    }
    if (unidad1.value == "mililitro" && unidad2.value== "litro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "litro/s";
    }
    if (unidad1.value == "mililitro" && unidad2.value== "Centilitro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "Centiltro/s";  
    }
    
    if (unidad1.value == "mililitro" && unidad2.value== "hectaltro"){
    resultado = numero / 100000;
    txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "hectalitro/s";
    
    }
    
    if (unidad1.value == "mililitro" && unidad2.value== "mililitro"){
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "mililitro/s";
    }
    if (unidad1.value == "mililitro" && unidad2.value== "decalitro"){
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " mililitro/s equivalen a " + resultado + "decalitro/s";
    }
    if (unidad1.value == "mililitro" && unidad2.value== "deciloitro"){
    resultado = numero / 100;
    txtResultado.innerHTML = numero + " mililitros/s equivalen a " + resultado + "decilitro/s";
    }
}    



