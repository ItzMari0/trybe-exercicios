let fatorial = 1;
const produto = (number) => {
  for (let i = 1; i <= number; i += 1) {
    fatorial *= i;
  }
  return fatorial;
}
console.log(produto(4));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));


const longestWord = (frase) => {
  frase = frase.split(' ');
  return frase.sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));