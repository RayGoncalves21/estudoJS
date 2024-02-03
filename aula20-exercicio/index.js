function meuEscopo() {
    const form = document.querySelector('.form');
    const dados = document.querySelector('.dados');
    let pessoas = []; 

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const pessoa = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso, 
            altura: altura,
        };

        pessoas.push(pessoa); 
        console.log(pessoas);

        atualizarDados();
    }

    function atualizarDados() {
        const dadosElement = document.querySelector('.dados');
        dadosElement.innerHTML = ''; 

        pessoas.forEach(function(pessoa) {
            const pessoaElement = document.createElement('div');
            pessoaElement.textContent = `Nome: ${pessoa.nome}, Sobrenome: ${pessoa.sobrenome}, Peso: ${pessoa.peso}, Altura: ${pessoa.altura}`;
            dadosElement.appendChild(pessoaElement);
        });
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
