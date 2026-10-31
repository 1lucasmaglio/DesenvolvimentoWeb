
// Mensagem de boas-vindas
alert("Bem-vindo(a) ao meu portfólio!");

// Mensagem de apresentação
function apresentacao() {
    alert("Olá! Meu nome é Lucas Maglio Chiabai e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Carapicuíba.");
}

// Alterar o título principal
function alterarTitulo() {
    let nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        document.getElementById("titulo-principal").innerHTML = nome;
    }
}

// Contador de cliques
let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

// Alternar entre tema escuro e tema cinza
function alternarTema() {
    document.body.classList.toggle("tema-claro");
}
