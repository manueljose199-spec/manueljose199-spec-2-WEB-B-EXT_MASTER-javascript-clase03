// Repite mientras la condicion sea true 

let i = 1;

while (i <= 10 ){
    console.log("while:", i);
    i++; // i = i + 1; VARIABLE DE CONTROL 
}

console.log('--------------------');

//Arrays 
let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[0])

console.log(frutas.length)

for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice])
}

console.log('Metodos de los arreglos')
let alumnos = []; // declarando un arreglo vacio

// Metodo push, agrega al final
alumnos.push("Ana");
alumnos.push("Bruno");
alumnos.push("Fernanda");
alumnos.push("Natalia");
console.log(alumnos);
// Metodo pop quita el ultimo
alumnos.pop();
console.log(alumnos);

//Metodo unshift agrega al principio
alumnos.unshift("Nina");
alumnos.unshift("Misael");
alumnos.unshift("Beto");

console.log(alumnos);
// Metodo shift quita al principio 
alumnos.shift();
console.log(alumnos);

// Arreglo de una lista de super 
// Impriman su lista del super 

// 1. Manzana 
// 2. Papas 
// 3. Papel de bano
// 4. Jabon


let listaDeSuper = ['Manzanas', 'Servilletas', 'Jabon', 'Aguacate', 'Tortillas']

for (let i = 0; i < listaDeSuper.length; i++ ){
    console.log((i+1) + "." + listaDeSuper[i])
}
console.log("Total de la lista=", listaDeSuper.length)


// EXTRA 1 Total de productos = ____

// EXTRA 2 Propmt (Guardar la lista que te da el usuario, dentro de un arreglo)


let listaSuper = [];
let producto = "inicio";

while (producto !== ""){
    producto = prompt('Ingresa un producto del super.')

    if (producto !== ""){
        listaSuper.push(producto);
    }
}

for (let indice = 0; indice < listaSuper.length; indice++){
    console.log((indice+1) + " - " + listaSuper[indice]);
}

console.log("Total de la lista=", listaSuper.length)


//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------ p



//pracrica campus 

let fruta = ['Manzana', 'Pera', 'Manzana', 'Mango', 'Pera', 'Manzana', 'Mango', 'Pera']; /// Arreglo de frutas

//Objeto para contar las frutas
let conteoFrutas = {};

//Contamos frutas usando ciclo FOR

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}


//Imprimir resultados
console.log("Conteo usando FOR:");
for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}

console.log('----------------------');


// Contar frutas usando WHILE
let conteoFrutasWhile = {};
let contador = 0;

while (contador < frutas.length) {
    let fruta = frutas[contador];

    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }

    contador++;
}

//Imprimir resultados del ciclo WHILE
console.log("Conteo usando WHILE:");
for (let fruta in conteoFrutasWhile) {
    console.log(fruta + ": " + conteoFrutasWhile[fruta]);
}

// ejercicio fibonaci  con for

let n = 10; // cantidad de números a mostrar

let a = 0;
let b = 1;
let c;

console.log("Fibonacci con ciclo FOR:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}

// ejercicio fibonaci  con ciclo while

let n2 = 10; // cantidad de números a mostrar

let x = 0;
let y = 1;
let z;
let contadorwhile = 1;

console.log("Fibonacci con WHILE:");

while (contador <= n2) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
    contador++;
}

