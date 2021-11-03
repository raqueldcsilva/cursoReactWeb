/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".*/
function comparaNum(num1, num2){
    const primeiraFrase = cria1(num1, num2)
    const segundaFrase = cria2(num1, num2)
    
    return `${primeiraFrase} ${segundaFrase}`
}

function cria1(num1, num2){
    let iguais = '';

    if(num1 !== num2){
        iguais = "não"
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`
};

function cria2 (num1, num2){
    const soma = num1 + num2

    let res10 = 'menor'
    let res20 = 'menor'
    const compara10 = soma > 10
    const compara20 = soma > 20

    if(compara10){
        res10 = 'maior'
    }

    if(compara20){
        res20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${res10} que 10 e ${res20} que 20.`
}

console.log(comparaNum(5,10))