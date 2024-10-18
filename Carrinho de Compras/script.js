const initialCartItems = [
    { id: 1, name: 'Produto A', price: 100, quantity: 1 },
    { id: 2, name: 'Produto B', price: 50, quantity: 2 },
    { id: 3, name: 'Produto C', price: 30, quantity: 1 },
];

const cartContainer = document.getElementById('cart');
const subtotalElement = document.getElementById('subtotal');
const checkoutButton = document.getElementById('checkoutBtn');

function renderCart() {
    cartContainer.innerHTML = ''; // Limpa o carrinho
    let subtotal = 0;

    initialCartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        
        // Cálculo do subtotal
        subtotal += item.price * item.quantity;

        itemDiv.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
            <button onclick="removeItem(${item.id})">Remover</button>
        `;
        
        cartContainer.appendChild(itemDiv);
    });

    subtotalElement.textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
}

function updateQuantity(id, newQuantity) {
    const item = initialCartItems.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(newQuantity);
        renderCart(); // Re-renderiza o carrinho
    }
}

function removeItem(id) {
    const index = initialCartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        initialCartItems.splice(index, 1); // Remove o item do carrinho
        renderCart(); // Re-renderiza o carrinho
    }
}

checkoutButton.addEventListener('click', () => {
    alert('Finalizando compra!');
    // Implementar lógica de finalização de compra aqui
});

// Renderiza o carrinho pela primeira vez
renderCart();