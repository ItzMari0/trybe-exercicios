// Exercício pós aula 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
    // let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]; {
    let soma = 0;
    for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
        console.log(soma);
}