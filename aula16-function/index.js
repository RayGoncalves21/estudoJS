
function saudacao(nome){
    return `Olá, ${nome}`;
}

saudacao('Ray');
saudacao('Roberto Carlos');

const nome = saudacao('Lucas')

console.log(nome)

function soma(num1, num2){
    return num1 + num2;
}

function multiplicacao(num1=10, num2=10){
    return num1 * num2;
}

var soma_numeros = soma('Ray', 'Goncalves');
console.log(soma_numeros);

var multiplicacao_numeros = multiplicacao(num1=158, num2=525);
console.log(multiplicacao_numeros);


var multiplicacao_numeros_novamente = multiplicacao(num1=158);
console.log(multiplicacao_numeros_novamente);



const raiz = function(n){
    return n ** 0.5
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(85));


// arrow function

const raiz_arrow = (n) => n ** 0.5


console.log(raiz_arrow(9));