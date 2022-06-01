// Exercício Array 1
let menuu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menuu.indexOf('Serviços');

console.log(menuServices);

// Exercício Array 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício Array 3
let menU = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menU[4] = 'Contato';
menU.push('Contato');
console.log(menU);

// Exercício For 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
    for(let index = 0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);    
    }

// Exercício 1 For/of 
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
    for(let name of names) {
    console.log(name);
}