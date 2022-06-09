let string = "Tryber x aqui!";
let skills = ['HTML', 'CSS', 'JS', 'DOM', 'React'];

const replace = (word) => {
  let newString = string.split(" ");
  newString[1] = word;
  newString = newString.join(" ");
  return newString;
}

console.log(replace('Bebeto'));