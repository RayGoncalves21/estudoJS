// Obtendo a data atual
const data = new Date();



// para string
console.log(data.toString())


const data0 = new Date(0); // é igual a 1 de janeiro de 1970 # Timestamp unix ou epoca unix
console.log(data0)


const tresHoras = 60 * 60 * 3 * 1000
const data1 = new Date(data.getTime() + tresHoras)
console.log(data1)
            //   1 hora * 24 horas * 1000 para ter em milesimos de segundos 
const umDia = 60 *60 *24 * 1000;
const dataUmDia = new Date(data.getTime() + umDia + umDia)
console.log(dataUmDia)

// Pelo menos dois paraemtros para não considerar milesegundos / a, m, d, h, M, ms
const data_def = new Date(2023, 4, 21, 14, 27, 999);
console.log(data_def.toString())


const data_string = new Date('2024/05/18 12:15:30');
console.log(data_string);
console.log('dia', data_string.getDate());
console.log('Mês', data_string.getMonth() + 1);
console.log('Hora', data_string.getHours());
console.log('Min', data_string.getMinutes());
console.log('Dia Semana', data_string.getDay());


const timeStampAtual = Date.now();

// Criando um objeto Date com o timestamp atual
const dataAtual = new Date(timeStampAtual);

// Convertendo para o horário no Brasil (GMT-3)
const horaBrasil = new Date(timeStampAtual - (3 * 60 * 60 * 1000));

console.log("Horário atual (GMT):", dataAtual);
console.log("Horário no Brasil (GMT-3):", horaBrasil);



function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda((data.getMonth() + 1));
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const ano = zeroAEsquerda(data.getFullYear());
    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;

}

const date = new Date();
const dataBrasil  = formataData(date)
console.log(dataBrasil)