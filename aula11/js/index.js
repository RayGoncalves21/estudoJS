alert('alertando você');


const resultado_apagar = window.confirm('Quer realmente apagar?');
console.log(resultado_apagar)
if( resultado_apagar == true){
    console.log("Apagado com sucesso")
}else{
    console.log("optou por não apagar")
}


let nome = window.prompt('Digite algo');

console.log(nome);



let tamanho = nome.length;


if (tamanho >= 3 && tamanho <= 6) {
    console.log('Maior ou igual a 3 e menor que 6, tamanho: ', tamanho);
} else if (tamanho > 6) {
    console.log('Maior que 6, tamanho: ', tamanho);
}

document.getElementById('nome').textContent = 'O nome é: ' + nome;
document.getElementById('tamanho').textContent = ' e tem o tamanho de ' + tamanho;



function retornar_saldo(numero1, operacional, numero2){
    let resultado = null;
    switch (operacional){
        case '+':
            resultado = parseFloat(numero1) + parseFloat(numero2);
            break;
        case '-':
            resultado = parseFloat(numero1) - parseFloat(numero2);
            break;
        case '*':
            resultado = parseFloat(numero1) * parseFloat(numero2);
            break;
        case '/':
            resultado = parseFloat(numero1) / parseFloat(numero2);
            break;
        default:
            console.log('Operado invalido');
        }
    
    return resultado;

    

}

let numero1 = window.prompt('Digite primeiro número');
let operacional = window.prompt("digite o operador(+, -, *, /)");
let numero2 = window.prompt("Digite o outro número");

let resultado = retornar_saldo(numero1, operacional, numero2);
// Mostrar o resultado no HTML
document.getElementById('resultado').textContent = 'Resultado da operação: ' + resultado;

console.log('resultado: ', resultado);

