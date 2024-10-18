// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Tema Claro';
    } else {
        themeToggleButton.textContent = 'Tema Escuro';
    }
}

// Função para adicionar produtos ao carrinho
function addToCart(productName) {
    // Aqui você pode adicionar lógica para adicionar o produto ao carrinho (por exemplo, salvar em localStorage ou atualizar uma lista)
    alert(`Produto "${productName}" adicionado ao carrinho!`);
}

// Adiciona um listener de evento ao botão de alternar tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Adiciona um listener de evento para que a notificação funcione apenas uma vez para cada botão
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function(event) {
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        addToCart(productName);
    });
});