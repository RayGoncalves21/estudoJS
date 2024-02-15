// ?:         um if e else simplificado ((condição) ? 'para verdadeiro' : 'para false')


const pontucao = 1500
const nivel = pontucao >= 1000 ? 'Usuário VIP' : 'Usuário Padrão';

console.log(nivel)


// callback - valor padrao caso não exista
const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao)

