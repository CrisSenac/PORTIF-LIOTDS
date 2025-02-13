// a função console.log serve para enviar mensagens por meio de console, esta é util para debugar o código 
//console.log("Sou uma mensagem de console");

// a função alert serve para exibir uma mensagem de alerta ao usuário
//alert("Sou uma mensagem de alerta");

// a função prompt recebe uma informação do usuário e armazena em uma variável se necessário
//prompt("Qual o seu nome?");

// a declaração let cria uma variável de escopo local
//let nome = "Ingrid";

// a declaração var cria uma variável de escopo global
//var idade = 24;

// a declaração const cria uma variável de escopo local, porém que o valor não pode ser alterado
//const cpf = '111.222.333-44'

let nome = prompt("Qual o seu nome?");

let idade = prompt("Olá, " + nome + ". Qual a sua idade?");

let aniversario = prompt("Você já fez aniversário em 2025?");

if(aniversario == "sim"){
    let nascimento = 2025 - idade;
    alert("Você nasceu em " + nascimento)
} else if( aniversario == "não") {
    let nascimento = 2024 - idade;
    alert("Você nasceu em " + nascimento);
} else {
    alert("Resposta inválida, tente de novo.");
}