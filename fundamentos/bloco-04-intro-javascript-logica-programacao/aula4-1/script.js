// Exercício 1
const a = 10;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercicio 2
const n1 = 5;
const n2 = 8;

if (n1 > n2){
    console.log("o maior é n1");
}
else {
    console.log("o maior é n2");
}

// Exercício 3
const nu1 = 5;
const nu2 = 7;
const nu3 = 4;

if (nu1 > nu2 && nu1 > nu3) {
    console.log("o maior é nu1");   
}
else if (nu2 > nu1 && nu2 > nu3) {
    console.log("o maior é nu2");
}
else {
    console.log("o maior é nu3");
}

// Exercício 4
const score = -1;

if (score > 0) {
    console.log("positivo");
}
else if (score < 0) {
    console.log("negativo");
}
else {
    console.log("zero");
}

// Exercício 5
const a1 = 90;
const a2 = -35;
const a3 = 55;

if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
    console.log("erro");
}
else if (a1 + a2 + a3 === 180) {
    console.log("true");
}
else {
    console.log("false");
}

// Exercício 6
const bishop = "DIAGONALS";
const pawn = "Foward";

console.log(bishop.toLowerCase());
console.log(pawn.toLowerCase());

// Exercício 7
let nota = 91;

if (nota < 0 || nota > 100) {
    console.log("erro");
}
else if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}

// Exercício 8
const p1 = 3;
const p2 = 6;
const p3 = 7;

if (p1 % 2 == 0 || p2 % 2 == 0 || p3 % 2 == 0) {
    console.log("true");
}
else {
    console.log("false");
}

// Exercício 9
const nn1 = 2;
const nn2 = 3;
const nn3 = 8;

if (nn1 % 2 == 1 || nn2 % 2 == 1 || nn3 % 2 == 1) {
    console.log("true");
}
else {
    console.log("false");
}

// Exercício 10
const custo = 100;
const valor = 140;
const imposto = (custo) * 20 / 100 ;
const custoTotal = custo + imposto;
const lucro = valor - custoTotal;

console.log(lucro);

// Exercício 11
let sBruto = 3000;

if (sBruto <= 1556.94) {
    console.log(sBruto - 8 / 100);
}
else if (sBruto >= 1556.95 && sBruto <= 1903.98) {
    console.log (sBruto - 9 / 100); 
} 
else if (sBruto >= 1903.99 && sBruto <= 2594.92) {
    console.log (([sBruto - 9 / 100] - 7.5 / 100) - 142.80); 
} 
else if (sBruto >= 2594.93 && sBruto <= 2826.65) {
    console.log (([sBruto - 11 / 100] - 7.5 / 100) - 142.80); 
} 
else if (sBruto >= 2826.66 && sBruto <= 3751.05) {
    console.log (([sBruto - 11 / 100] - 15 / 100) - 354.80); 
} 
else if (sBruto >= 3751.06 && sBruto <= 4664.68) {
    console.log (([sBruto - 11 / 100] - 22.5 / 100) - 636.13); 
} 
else if (sBruto > 4664.68 && sBruto <= 5189.82) {
    console.log (([sBruto - 11 / 100] - 27.5 / 100) - 869.36);     
} 
else {
    console.log(([sBruto - 570.88] - 27.5 / 100) - 869.36);
}