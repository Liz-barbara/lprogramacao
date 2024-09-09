var nota = 10;

if(nota >= 90 && nota <= 100){
    console.log("Classificação da nota A");
} else if(nota >= 80 && nota < 90){
    console.log("Classificação da nota B");
} else if(nota >= 70 && nota < 80){
    console.log("Classificação da nota C" );
} else if(nota >= 60 && nota < 70){
    console.log("Classificação da nota D");
} else if(nota >= 0 && nota < 60){
    console.log("Classificação da nota F");
} else {
    console.log("NOTA IVÁLIDA");
}

var idade = 15;

if(idade >= 0 && idade <= 15){
    console.log("Criança")
} else if(idade >=16 && idade <= 18){
    console.log("Adolescente")
} else if(idade >= 19 && idade <=59){
    console.log("Adulto")
} else if(idade >= 60 && idade <=100){
    console.log("idoso")
}


var valor = -90;

if(valor > 0){
    console.log("Positivo");
} else if(valor < 0){
    console.log("Negativo");
}else{
    console.log("zero");
}
