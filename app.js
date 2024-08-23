let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intento
    condicionesIniciales();
    //dehabilitar el boton numero juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function saludo (){
    console.log("Hola mundo");
}

function persona (nombre){
    console.log("Hola, "+nombre);
}

function doble (valor){
    return 2 * parseInt(valor);
}

function promedio (a, b, c){
    return (parseInt(a) + parseInt(b) + parseInt(c))/3;
}

function mayor (a, b){
    
    if (a > b) {
        return a;
    } else if (b > a){
        return b;
    } else{
        console.log("son iguales");
    }
}

function potencia (valor){
    return parseInt(valor) * parseInt(valor);
}

saludo();
persona('Miguel');
let preguntaDoble = doble(2);
console.log(preguntaDoble);
let promedioDeTres = promedio(3,4,5)
console.log(promedioDeTres);
let nummayor = mayor(2,3);
console.log(nummayor);
let nummenor = mayor(5,4);
console.log(nummenor);
let numigual = mayor(6,6);
console.log(numigual);
let cuadrado = potencia(9);
console.log(cuadrado);
