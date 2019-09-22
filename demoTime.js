////////// 1
function dizOi(){
    console.log("Oi!");
}

dizOi();



////////// 2
function converteParaDolar(valorEmReais){
    const valorEmDolar = valorEmReais * 4.17;
    return valorEmDolar;
}
    
let quantiaEmReais = 100;
console.log(converteParaDolar(quantiaEmReais));
// ou
let quantiaEmDolar = converteParaDolar(quantiaEmReais);



////////// 3
let valorEmDolar = function(valorEmReais){
    return valorEmReais * 4.17;
}
let quantia = valorEmDolar(100);

// ou
let valorEmDolar = function(valorEmReais){
    console.log(valorEmReais * 4.17);
}
let quantia = valorEmDolar(100)



////////// 4
converteParaDolar(100);
function converteParaDolar(valorEmReais){
    const valorEmDolar = valorEmReais * 4.17;
    return valorEmDolar;
}


valorEmDolar(100);
let valorEmDolar = function(valorEmReais){
    return valorEmReais * 4.17;
}