const data = new Date();

const dia_semana = data.getDay();


function getDiaSemanaTexto(dia_semana){
    let diaSemanaTexto;
    switch (dia_semana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-Feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-Feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sabádo";
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
        
    }
}


console.log(getDiaSemanaTexto(dia_semana));
console.log(dia_semana)

