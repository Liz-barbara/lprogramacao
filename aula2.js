var idade = 20;

switch(true){
    case(idade<13):
     console.log(`criança`);
    break;
    case(idade >=13 && idade <18):
     console.log(`adolescente`);
    break;
    case(idade >= 18 && idade <65):
     console.log(`adulto`);
    break;
    case(idade >= 65):
     console.log(`idoso`);
    break;
  default:
     console.log(`idade inválida`);
     break;      
}