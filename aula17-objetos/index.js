
// objeto literal
const pessoa = {
    nome: 'Ray',
    sobrenome: 'Goncalves',
    idade: 28,
    nascimento: 1995,

    fala (){
        return 'olá, ' + this.nome;
    },

    calculo_idade (){
        return 2024 - this.nascimento;
    }
};

console.log(pessoa.nome);

// Cria objetos - factory
function criaPessoa(nome, sobrenome, idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}

const pessoa1 = criaPessoa('Ray', 'Goncalves', 28)

console.log(pessoa1.idade)

console.log(pessoa.fala())

console.log(pessoa.calculo_idade())

