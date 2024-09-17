
function calcular_fatorial_recursivo(n){
    if( n < 0 ){
        throw new Error("o numero deve ser não-nagetivo");  
    }
    
    if(n === 0){
        return 1;
    }
        return n * calcular_fatorial_recursivo(n - 1)
}
console.log(calcular_fatorial_recursivo(10));

