var idade = 15;

switch (true) {
  case(idade <13):
    console.log(`Criança`);
    break;
  case(idade >=13 && idade <18):
    console.log(`adolescente`);
    break;
  case(idade>=18 && idade < 65):
    console.log(`adulto`);
    break;
  case(idade>= 65):
    console.log(`idoso`);
    break;
    default:
        console.log(`idade invalida`);
    break;
}  
