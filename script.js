// Função para alternar entre temas
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeToggleButton = document.getElementById('themeToggle');

    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Tema Claro';
    } else {
        themeToggleButton.textContent = 'Tema Escuro';
    }
}

// Evento para mudar o tema quando o botão é clicado
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Formulário de cadastro de animais
document.getElementById('animalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const color = document.getElementById('color').value;
    const serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
    const services = Array.from(serviceCheckboxes).map(cb => cb.value).join(', ');

    const animalList = document.getElementById('animalList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `Nome: ${name}, Raça: ${breed}, Cor: ${color}, Serviço: ${services} 
                          <button class="remove-btn">Remover</button>`;
    animalList.appendChild(listItem);

    // Adiciona evento de remoção ao botão
    listItem.querySelector('.remove-btn').addEventListener('click', function() {
        animalList.removeChild(listItem);
    });

    // Mensagem de confirmação
    alert(`Animal ${name} cadastrado com sucesso!`);

    // Limpando o formulário
    document.getElementById('animalForm').reset();
});
