/*

If pode ser usado sozinho

Sempre que ultilizo a palavra else preciso de um if antes

eu posso ter vários ifs na checagem

apenas 1 else na checagem


*/


var numeroAleatorio = Math.floor(Math.random() * 23) + 1;

let horario = numeroAleatorio;


function saudacao (nome){
    frase = ''
if(horario => 0 && horario<=11) {
    frase = `Bom dia, ${nome}. São ${horario} horas.`;
} else if(horario >= 12 && horario <= 17) {
    frase = `Boa tarde, ${nome}. São ${horario} horas.`;
} else{
    frase = `Boa noite, ${nome}. São ${horario} horas.`;
}
return frase
}

roberto = saudacao('Roberto')
console.log(roberto)
console.log(saudacao('Ray'))


