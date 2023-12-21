// a crase ` é o único que pode fazer uma f string

function calcularImc() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const calculoImc = peso / (altura * altura);

    const resultadoDiv = document.getElementById('resultado');

    if (calculoImc <= 18.5) {
        resultadoDiv.innerHTML = `${nome}, você está DESNUTRIDO, seu IMC é: ${calculoImc}`;
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
        resultadoDiv.innerHTML = nome + ', você está no Peso ideal. Seu IMC é: ' + calculoImc;
    } else if (calculoImc >= 25 && calculoImc <= 29.9) {
        resultadoDiv.innerHTML = nome + ', você está acima do peso, seu IMC é: ' + calculoImc;
    } else {
        resultadoDiv.innerHTML = 'nome, você está obeso, seu IMC é: ' + calculoImc;
    }
};
