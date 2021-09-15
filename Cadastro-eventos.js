//Sistema para cadstro de pessoas para Eventos !!!!

let totalVagas = 100;
const dataEvento = 20;
const idadePermitida = 18;

// Entrada do usuario
let fazerCadastro = 1;
let dataAtual = 15;
let seuNome = "Almir";
let suaIdade = 30;

/* 
A primeira condicao sera realizada se os três requisitos forem verdadeiros
! 1: Data precisa ser anterior ao evento.
! 2: Sua idade precisa ser maior ou igual a 18 anos.
! 3: Enquanto houver vagas para cadastro.
*/
if (
  dataAtual < dataEvento &&
  suaIdade >= idadePermitida &&
  fazerCadastro < totalVagas
) {
  console.log("Cadastro Permitido!");

  // Condicao caso data nao seja anterior a do evento, mesmo que haja vagas.
} else if (dataAtual >= dataEvento) {
  console.log("Data indisponível");

  // Condicao caso a idade seja menor que 18 anos.
} else if (suaIdade < idadePermitida) {
  console.log("Idade nao permitida!");
}


if (
  dataAtual < dataEvento &&
  suaIdade >= idadePermitida &&
  fazerCadastro < totalVagas
) {
  // A cada novo cadastro e decrementado de total de vagas e incrementado em novo cadastro.
  do {
    totalVagas -= fazerCadastro;
    let listEvento = [];
    listEvento.push(seuNome);
    console.log(listEvento);
    console.log("Total de Participantes" + ":", +fazerCadastro);
    console.log("Vagas Disponiveis" + ":", +totalVagas);

    break;
  } while (totalVagas);
  // Condicao para evitar bug se o cadastro tentar ser maior que o total de vagas e data atual seja posterior a da do evento
} else if (fazerCadastro >= totalVagas && dataAtual < dataEvento) {
  console.log("Nao ha mais vagas!");
}