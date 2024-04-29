
function exibirMensagemDeBoasVindas() {
    var nome = prompt("Olá! Qual é o seu nome?");
    if (nome !== null && nome !== "") {
        alert("Bem-vindo(a) à nossa barbearia, " + nome + "!");
    }
}
function exibirHorarioFuncionamento() {
    var diaAtual = new Date().getDay();
    var horarioFuncionamento;

    switch (diaAtual) {
        case 0: // Domingo
            horarioFuncionamento = "Fechado";
            break;
        case 1: // Segunda-feira
        case 2: // Terça-feira
        case 3: // Quarta-feira
        case 4: // Quinta-feira
        case 5: // Sexta-feira
            horarioFuncionamento = "Aberto das 13h às 18h";
            break;
        case 6: // Sábado
            horarioFuncionamento = "Aberto das 13h às 16h";
            break;
    }

    alert("Horário de funcionamento:\n" + horarioFuncionamento);
}
window.onload = function() {
    exibirMensagemDeBoasVindas();
    exibirHorarioFuncionamento();
};