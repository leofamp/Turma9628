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
    totalFor.value = Number(forc.value) + Number(forMod.value)
    totalDes.value = Number(des.value) + Number(desMod.value)
    totalCon.value = Number(con.value) + Number(conMod.value)
    totalInt.value = Number(int.value) + Number(intMod.value)
    totalSab.value = Number(sab.value) + Number(sabMod.value)
    totalCar.value = Number(car.value) + Number(carMod.value)
}
function camposD20(){
    numeros_d20 = gerarNumeroAleatorio()

    forD20.value = numeros_d20[0]
    desD20.value = numeros_d20[1]
    conD20.value = numeros_d20[2]
    intD20.value = numeros_d20[3]
    sabD20.value = numeros_d20[4]
    carD20.value = numeros_d20[5]

    modificador(numeros_d20)
}
function modificador(numeros_aleatorios){
    numeros_d20 = numeros_aleatorios
    let mod = []

    for (let i = 0; i< 6; i++ ){
        valor = numeros_d20[i]
        if (valor > 15 ){
            mod[i] = Math.round(1+(valor / 1.2))
        } else if (valor > 7 ){
            mod[i] = ((valor/1.2).toFixed(0))
        } else {
            mod[i] = Math.round(valor/0.8)
        }
    }
    forMod.value = mod[0]
    desMod.value = mod[1]
    conMod.value = mod[2]
    intMod.value = mod[3]
    sabMod.value = mod[4]
    carMod.value = mod[5]
}

function recarregar(){
    window.location.reload(true)
}

