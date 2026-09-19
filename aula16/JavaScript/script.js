//getElementsByTag(th)
//var forbase = document.getElementsById('forBase') = 20
//var forBase = document.getElementsByName("forBaseName")
//var forBase = document.getElementsByClass("forClass")

let forc = document.getElementById("forBase") 
let des = document.getElementById("desBase")
let con = document.getElementById("conBase")
let int = document.getElementById("intBase")
let sab = document.getElementById("sabBase")
let car = document.getElementById("carBase")

let forD20 = document.getElementById("forD20")
let desD20 = document.getElementById("desD20")
let conD20 = document.getElementById("conD20")
let intD20 = document.getElementById("intD20")
let sabD20 = document.getElementById("sabD20")
let carD20 = document.getElementById("carD20")

let forMod = document.getElementById("forMod")
let desMod = document.getElementById("desMod")
let conMod = document.getElementById("conMod")
let intMod = document.getElementById("intMod")
let sabMod = document.getElementById("sabMod")
let carMod = document.getElementById("carMod")

let totalFor = document.getElementById("forTotal")
let totalDes = document.getElementById("desTotal")
let totalCon = document.getElementById("conTotal")
let totalInt = document.getElementById("intTotal")
let totalSab = document.getElementById("sabTotal")
let totalCar = document.getElementById("carTotal")

let botaoDado = document.getElementById("dado")
let botaoCalcular = document.getElementById("calcular")
let botaoResetar = document.getElementById("resetar")

botaoCalcular.addEventListener("click", calcular)
botaoDado.addEventListener("click", camposD20)
botaoResetar.addEventListener("click", recarregar)

function gerarNumeroAleatorio(){
    let array_numers_aleatorios = []
    for (let i = 0; i< 6; i++){
        array_numers_aleatorios[i] = Math.floor(20*Math.random()+1) 
    }
    return array_numers_aleatorios
}

function calcular(){

}
function camposD20(){

}
function recarregar(){

}

