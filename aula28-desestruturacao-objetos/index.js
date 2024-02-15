
const pessoa = {
    nome:'Ray',
    sobrenome: 'Gonçalves', 
    idade: 28,
    endereco: {
        rua: 'Avenida 1',
        numero: 17
    }
}

// Atribuição via desestruração
const {nome, sobrenome = 'Não existe'}  = pessoa;
const num_casa = pessoa.endereco.numero


console.log(nome, sobrenome)

const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;

console.log(r, numero, endereco);

