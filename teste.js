let numero = 1;

while (numero <= 5) {

	if (numero % 2 === 0) {
		console.log(numero,"é par");
	}else {
		console.log(numero,"é ímpar");
    }
numero++;
}

function dobro(valor) {
return valor * 2;
}

console.log("Dobro de 4:", dobro(4));