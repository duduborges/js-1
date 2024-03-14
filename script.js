// algoritmo 1

let idade = 17
document.write("Algoritmo 1: Minha idade é  ", idade, " anos  ")

//algoritmo 2

let x = 8

let y = 21

let z = x + y

document.write("<br>Algoritmo 2: ", x, " + ", y, " = ", z)


// algoritmo 3

let totalCompra = 299.99
let parcelas = 3
let valorParcela = totalCompra / parcelas

document.write("<br> Algoritmo 3: ", "O valor total da compra foi R$", totalCompra, " Forma de pagamento:", parcelas, "x de R$", valorParcela.toFixed(2))


// algoritmo 4
let minutos = 5
let segundos = minutos * 60

document.write("<br> Algoritmo 4: ", minutos, " minutos equivale à ", segundos, "!")

// algoritmo 5

let aluno = "Joãozinho"
let nota1 = 10
let nota2 = 7
let nota3 = 5
let media = (nota1 + nota2 + nota3) / 3

document.write("<br> O aluno ", aluno, " ficou com média ", media)

// algoritmo 6

let a = 10
let b = 20
b = a
a = b

console.log("A ", a, "B ", b)

// algoritmo 7
let eleitores = Number(prompt("Digite o numero total de eleitores do seu municipio: "))
let nulos = Number(prompt("Digite o total de eleitores que votaram nulo no seu municipio: "))
let branco = Number(prompt("Digite o total de eleitores que votaram em branco no seu municipio: "))
let validos = Number(prompt("Digite o total de eleitores que tiveram votos validos no seu municipio: "))

let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualBranco = (votosBrancos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;
alert("Em percentual, os dados foram, NULOS:" + percentualNulos.toFixed(2), "BRANCOS: " + percentualBranco.toFixed(2), "VALIDOS: " + percentualValidos.toFixed(2))


// algoritmo 8

let valor1 = Number(prompt("Insira o primeiro valor:"))
let valor2 = Number(prompt("Insira o segundo valor:"))

if (valor1 > valor2) {
    alert("O valor 1 é maior")
} else if (valor1 < valor2) {
    alert("O valor 2 é maior")
} else if (valor1 === valor2) {
    alert("Os valores são iguais")
}

// // algoritmo 9 

let macas = Number(prompt("Quantas maças você comprou?"))
let totalMacas = 0

if (macas < 12) {
    totalMacas = macas * 0.30
    alert("Total da compra foi: " + totalMacas)
} else {
    totalMacas = macas * 0.25
    alert("Total da compra foi: " + totalMacas)
}


// algoritmo 10

let nome = prompt("Qual seu nome: ")
let idade2 = Number(prompt("Qual sua idade: "))
let nascimento = 2024 - idade2

alert("Nome " + nome + " Idade: " + idade2 + " anos, Nasceu em " + nascimento)


// algoritmo 11

let numero = Number(prompt("Digite um número e vamos ver se ele é par ou impar"))

if (numero % 2 == 0) {
    alert("Numero é par")
} else (
    alert("Número é impar")
)

// algoritmo 12

let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNascimento = Number(prompt("Digite seu ano de nascimento: "))
let idadeTotal = anoAtual - anoNascimento

if (idadeTotal < 16) {
    alert("Você não poderá votar esse ano")
} else {
    alert("Você poderá votar esse ano")
}