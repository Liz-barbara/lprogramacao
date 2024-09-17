function somaDe1aN(n){
    if (n < 1)  {
        throw new Error( "o valor de n deve ser um número inteiro positivo");
    }
    let soma = 0;
    for (let i = 1; i <= n; i++){
        soma += i;
    }
    return soma;
}

console.log(somaDe1aN (8));
console.log(somaDe1aN(4));