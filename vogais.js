function contarAvogais(str) {
    const vowels = 'aeiouAEIOU';

    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}

const sentence = "Olá, como você está?";
const vowelCount = contarAvogais(sentence);

console.log(`Número de vogais: ${vowelCount}`); 