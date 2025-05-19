let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let product = this.dataset.product;
        addToCart(product);
    });
});

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item} <span class="remove" data-index="${index}">X</span>`;
        cartContainer.appendChild(cartItem);
    });

    // Agregar el evento de eliminación
    document.querySelectorAll('.remove').forEach(removeButton => {
        removeButton.addEventListener('click', function() {
            let index = this.dataset.index;
            cart.splice(index, 1);
            renderCart();
        });
    });
}

document.getElementById('submit-order').addEventListener('click', function() {
    submitOrder();
});

function submitOrder() {
    fetch('backend/pedidos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productos: cart })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Pedido realizado con éxito!');
            cart = [];
            renderCart();
        } else {
            alert('Hubo un error al realizar el pedido.');
        }
    });
}
