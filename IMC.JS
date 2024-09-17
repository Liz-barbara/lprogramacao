function calcularIMC(peso, altura) {
    if (altura <= 0) {
        throw new Error("A altura deve ser maior que zero.");
    }
    
    const IMC = peso / (altura * altura);
    return IMC;
}

const peso = 70; 
const altura = 1.75; 

try {
    const IMC = calcularIMC(peso, altura);
    console.log(`O IMC é: ${IMC.toFixed(2)}`); 
} catch (error) {
    console.error(error.message);
}
