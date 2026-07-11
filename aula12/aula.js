// let nome = "Leo"//string
// let n1 = 1//int
// let n2 = 1.5//float
// let aprovado = true//boolean


// let n1 = 10**1000


// console.log(n1)

let n1 = prompt("Digite um número (ou -1 para sair):")
n1 = parseInt(n1)

let resultado = 0

while (n1 !== -1) {
    resultado += n1
    
    n1 = prompt("Digite um número (ou -1 para sair):")
    n1 = parseInt(n1)
}

console.log("Resultado final:", resultado)

