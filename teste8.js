const teste = [1,2,3,4];
console.log(teste);

teste.push(50); 
console.log(teste);

teste.pop(); 
teste.pop();
console.log(teste);

teste.unshift(7);
console.log(teste);

teste.shift();
console.log(teste);

const arr1 = [1,2];
const arr2 = [3,4];
const juntos = arr1.concat(arr2);
console.log(juntos);