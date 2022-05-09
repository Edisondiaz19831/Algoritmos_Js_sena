// document.body.onload = function (){
//     alert("hola mundo")
// }
function suma() { 
    var A=0;
    var B=0;
    var suma=0;
    alert("este alghoritmo hace la suma de dos valores ingresados por el usuario ");
A= parseInt(prompt("Por favor ingrese el primer valor a sumar "));
B= parseInt(prompt("Por favor ingrese el segundo valor a sumar "));
suma=A+B;
    alert ("El resultado de la suma es :"  + suma);
 }
 function operacionesMatematicas (){
    var suma1 = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;
    var A = 0;
    var B = 0;
    alert (" Este algoritmo hace las operaciones aritmeticas  basicas" );
    A= parseFloat(prompt("Por favor ingrese el primer valor "));
    B= parseFloat(prompt("Por favor ingrese el segundo valor "));
    suma1=A+B;
    resta=A-B;
    multiplicacion=A*B;
    division=A/B
    alert ("El resultado de la suma es :"  + suma1 + "\nEl resultado de la resta es :"  + resta + "\nEl resultado de la multiplicacion es :"  + multiplicacion + "\nEl resultado de la division es :"  + division);
     }
     function siAnidado(){
        var A=0;
        var B=0;

        alert("este alghoritmo compara  dos valores ingresados por el usuario e informa si existe igualdad o si el numero es mayor respecto al otro ");
        A= parseInt(prompt("Por favor ingrese el primer numero "));
        B= parseInt(prompt("Por favor ingrese el segundo numero "));
       if (A==B) {
           alert ("El numero " + A +" Es igual al numero "+ B);
       } else if(A>B)  {
           alert("El numero "+ A +" Es mayor que "+ B);
       }else {
            alert("El numero menor es"+ B );
       }
     }
     function   menorDetres(){
        var A=0;
        var B=0;
        var C=0;
        alert("este alghoritmo compara  tres valores ingresados por el usuario e informa si existe igualdad o si el numero es mayor respecto al otro ");
        A= parseInt(prompt("Por favor ingrese el primer numero "));
        B= parseInt(prompt("Por favor ingrese el segundo numero "));
        C= parseInt(prompt("Por favor ingrese el tercer numero ")); 
        
        if ((A==B) && (B==C)) {
            alert("Los tres numeros indicados son iguales");
        } else if (A>=B && A>=C) {
            alert("El numero menor de los tres es " + C);
        } else if (A>=B && B<=C) {
            alert("El numero menor de los tres es " + B);    
        }else   {
            alert("El numero menor de los tres es " + A);
        }
    }    
    function    numeroPar(){
        var A=0;
        var R=0;
        alert("este alghoritmo identifica si un numero digitado es par o impar ");
        A= parseInt(prompt("Por favor ingrese un numero "));
        R=  A % 2;
        if (R=0) {
        alert("El numero  digitado es par ");
        } else {
        alert("El numero  digitado es impar ");  
        }
    }
function elevaA2(){
    var A=0;
    alert("este algoritmo  eleva al cuadrado u numero dado ");
    A= parseInt(prompt("Por favor ingrese un numero entero positivo"));
    var B=A*A;    
    alert("El cuadrado del numero  " + A +" Es " + B);
}
function areaTriangulo(){
    var B=0;
    var H=0;
    var A=0;
    alert("Este algoritmo  calcula el area de un triangulo  ");
    B=parseFloat(prompt("Digite el valor de la base del triangulo"));
    H=parseFloat(prompt("Digite el valor de la altura del triangulo"));
    A=((B*H)/2)
    alert("El area del triangulo con base "+ B +"y altura "+ H + "es"+ A );
}
function conversorUnidades(){
    var M =0;
    var K =0;
    var C =0;
    var P =0;
    alert("este algoritmo realiza la conversion de una cantida dada en metros a kilometros centimetros y pulgadas ");
    M=parseFloat(prompt("Digite la cantidad en metros que desea cobnvertir "));
    C=(M/100);
    K=(M*1000);
    P=(M*39.3701)
        alert ("El resultado de la en centimetros  es :"  + C + "\nEl resultado de en kilometros es :"  + K + "\nEl resultado en  púlgadas  es :"  + P);
}
function calculoEdad(){
    var Edad=0;
    var Adn=0;
    alert("Este algoritmo calcula el año en que nacio un usuario dependiendo de la edad suministrada ");
    Edad=parseFloat(prompt("Digite su edad actual "));
    Adn=2022-Edad
    alert("El año de nacimiento es  "+ Adn );
}
function calculoInteres(){
    var Edad=0;
    var Adn=0;
    alert("Este algoritmo la cantidad de dinero que una persona puede ganar al invertir su capital en un banco que paga interes mensual del 2%. El tiempo debe ser suministrado por quien desea consultar  ");
    capital=0;
    tiempo=0;
    tasaDeInteres=0;
    interesGanado=0;
    totalGanado=0;
    capital=parseFloat(prompt("Por favor digite el valor que desa invertir "));
    tiempo=parseFloat(prompt("Por favor digite la cantidad en años en las que mantendrá la inversión "));
    tasaDeInteres=parseFloat(prompt("Por favor digite a tasa de interes ofrecida "));
    interesGanado=(capital*(tasaDeInteres)/100)*(tiempo)*12
    totalGanado=interesGanado+capital
    alert("La cantidad de interes ganado por los años informados es = "+interesGanado)
    alert("La cantidad de los intereses más el capital ganado es =" +  totalGanado );
}
function PromedioNotas(){
    var Edad=0;
    var Adn=0;
    alert("Este algoritmo determina el promedio de un alumno con 5 calificaciones con escalas de 1 a 5, rpruba si la nota final es 1 hasta 2.9  y aprueba con nota mayoe a 3 ");
    var nota=0;
    var totalNotas=0;
    var promedio=0;
    var i=1;
    for (let i = 1; i < 6; i++) {
        nota=parseFloat(prompt("Digite la nota  "+ i));
        totalNotas=nota+totalNotas
        }
        promedio=(totalNotas/5)
        alert(" el total de las notas es "+totalNotas);
        alert( " El promedio obtenido es  "+promedio);
        if (promedio=2.9) {
            alert(" El estado el alumno  es APROBADO ");
            } else {
            alert(" El estado el alumno  es REPROBADO ");  
            }
}
function PrecioManzanas(){
    alert("Este algoritmo determina cuanto debe pagar un cliente de acuerdo a un descuento ofrecido por una tienda de venta de manzanas la cual ofrece valor del lkilo de manzanas a $4500 Los descuentos ofrecidos son  = por la compra de 0 a  2 klos = 0%; de 3 a 5 klos = 10% , de 6 a  10 klos = 15% y para mas de 10 20%  ");
    var k=0;
    var vd=0;
    var vp=0;
    var p=4500;
    alert("Digite la cantidad de kilos de manzadas adquiridos ");
         k=parseFloat(prompt("Digite la cantidad de kilos de manzadas adquiridos: "));
    if (k<=2)
     {
        vd<-((p*k)*0)
        alert("El descuento obtenido es:  "+vd);
    } else if ((k>=3) && (k<=5) ) 
    {
        vd=((p*k)*(10/100))
        alert("El descuento obtenido es:  "+vd );
    } 
    else if ((k>=5) && (k<= 10)) 
    {
        vd=((p*k)*(15/100))
        alert("El descuento obtenido es:  "+vd );           
    }
    else 
    {
         vd=((p*k)*(20/100))
        alert("El descuento obtenido es:  "+vd );
    }
    vp=((p*k)-vd)
    alert("El valor que debe pagar por esta compra es :  "+vp );
}
function CifrasDenumero(){
    alert("Este algoritmo identifica la cantidad de cifras que contiene un numero dado , identifica de una cifra.de dos, de tres , de cuatro y mas de 4  ");
    var c=0;
    c=parseInt(prompt("Digite un numero entero positivo de cualquier cantidad de cifras: "));
    if (c<=9) {
        alert("El numero informado es de una cifra  " );
    } else if ((c>9) && (c<=99)) {
        alert("El numero informado es de dos cifras  " );
    } else if ((c>99) && (c<=999)) {
        alert("El numero informado es de tres cifras  " );
    } else if ((c>999) && (c<=9999)) {
        alert("El numero informado es de cuatro cifras  " );
    } else    {
        alert("El numero informado es de más de cinco cifras  " );
    }
}   