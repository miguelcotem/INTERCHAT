// script.js

// Função para alternar entre temas
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

// Evento para mudar o tema quando o botão é clicado
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação do login
    if (username === 'cardoso' && password === '12p4') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Usuário ou senha incorretos.';
    }
});

// Formulário de cadastro de animais
document.getElementById('animalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const color = document.getElementById('color').value;
    const serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
    const services = Array.from(serviceCheckboxes).map(cb => cb.value).join(', ');

    // Criando um novo item na lista
    const animalList = document.getElementById('animalList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${name}, Raça: ${breed}, Cor: ${color}, Serviço: ${services}`;
    animalList.appendChild(listItem);

    // Limpando o formulário
    document.getElementById('animalForm').reset();
});
