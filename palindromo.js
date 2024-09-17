function epalindromo(palavra){
    const palavraLimpa = palavra.replace( /\s+/g, '').toLowerCase();
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === palavraInvertida; 

}

console.log(epalindromo ("RADAR"));
console.log(epalindromo ("oi"));
console.log(epalindromo("trabalho"));
