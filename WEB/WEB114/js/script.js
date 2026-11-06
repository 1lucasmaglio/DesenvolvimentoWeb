
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

document.querySelector(".formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim().length < 3) {
        alert("Nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail inválido. Digite um e-mail válido.");
        return;
    }

    if (mensagem.trim().length < 10) {
        alert("Mensagem deve ter pelo menos 10 caracteres.");
        return;
    }

    alert("✅ Formulário preenchido com sucesso!");

    this.reset();
});


