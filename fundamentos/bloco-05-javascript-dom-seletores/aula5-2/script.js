console.log(document.getElementById('elementoOndeVoceEsta'));
console.log(document.getElementById('elementoOndeVoceEsta').parentNode);
document.getElementById('pai').style.color = 'blue';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho.';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

let pai = document.getElementById('pai');
irmaoElemento = document.createElement('section');
pai.appendChild(irmaoElemento);

let elementoOnde = document.getElementById('elementoOndeVoceEsta');
filhoElemento = document.createElement('section');
elementoOnde.appendChild(filhoElemento);

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filho = document.createElement('section');
filhoDoFilho.appendChild(filho);
filho.parentNode.parentNode.nextSibling.nextSibling;

