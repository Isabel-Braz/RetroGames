function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var validUsername = "meuUsuario";
    var validPassword = "senha";

    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html"; // Redireciona para a página desejada
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}

// Alterna entre modos de contraste
document.getElementById('contrast-toggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Define o tamanho padrão da fonte
const defaultFontSize = 26; // Mantenha como número, sem 'px'
const maxFontSize = 30; // Limite máximo para o tamanho da fonte
const minFontSize = 22; // Limite mínimo para o tamanho da fonte
let currentFontSize = defaultFontSize; // Inicializa com o tamanho padrão

// Define o tamanho padrão da fonte no início
document.body.style.fontSize = `${defaultFontSize}px`;

// Aumenta o tamanho da fonte
document.getElementById('increase-font').addEventListener('click', function() {
    if (currentFontSize < maxFontSize) {
        currentFontSize += 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    }
});

// Diminui o tamanho da fonte
document.getElementById('decrease-font').addEventListener('click', function() {
    if (currentFontSize > minFontSize) {
        currentFontSize -= 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    }
});

// Reseta o tamanho da fonte ao padrão
document.getElementById('reset-font').addEventListener('click', function() {
    currentFontSize = defaultFontSize; // Atualiza a variável de controle
    document.body.style.fontSize = `${currentFontSize}px`;
});
