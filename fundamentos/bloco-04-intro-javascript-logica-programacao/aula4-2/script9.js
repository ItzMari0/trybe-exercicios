// Exercício pós aula 9
let primeiro = 1;
let ultimo = 25;
let array = [];
    for(let index = primeiro; index <= ultimo; index += 1) {
    array.push(index);
}
    console.log(array);
    for(let number of array) {
        console.log(number / 2);
    }