function verificarAnoBissexto(ano) {
    if((ano % 4 === 0 && ano % 100 !== 0 ) || (ano% 400 === 0 ))
        return `${ano} é um ano bissexto.`;
 else {
    return `${ano} não é bissexto`;
 }
} console.log(verificarAnoBissexto (2023));