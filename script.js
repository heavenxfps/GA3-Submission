document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');


    var enterButton = document.getElementById('enter-button');
    if (enterButton) {
        enterButton.addEventListener('click', function(event) {
            event.preventDefault();  
            window.location.href = 'success.html'; 
        });
    }

    var backButton = document.getElementById('back-button-2');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'failure.html';  
        });
    }

    var loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = 'twofactor.html';  
        });
    }

    var backButton3 = document.getElementById('back-button-3');
    if (backButton3) {
        backButton3.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'login-failure.html';  
        });
    }

    var enterButton2 = document.getElementById('enter-button-2');
    if (enterButton2) {
        enterButton2.addEventListener('click', function(event) {
            event.preventDefault();  
            window.location.href = 'login-success.html'; 
        });
    }

    var loginButton2 = document.getElementById('login-button-2');
    if (loginButton2) {
        loginButton2.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = 'twofactor2.html';  
        });
    }

    document.getElementById('quantity').addEventListener('input', function() {
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseInt(this.value);
        const totalAmount = (price * quantity).toFixed(2) + ' USD';
        document.getElementById('total-amount').value = totalAmount;
    });

    document.getElementById('stock-purchase-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Stocks purchased successfully!');
    });

    const stockSelect = document.getElementById('stock-select');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const totalAmountInput = document.getElementById('total-amount');
    const stockImage = document.getElementById('stock-image');

    function updateTotalAmount() {
        const price = parseFloat(priceInput.value);
        const quantity = parseInt(quantityInput.value);
        const totalAmount = price * quantity;
        totalAmountInput.value = totalAmount.toFixed(2) + ' USD';
    }

    stockSelect.addEventListener('change', function() {
        const selectedOption = stockSelect.options[stockSelect.selectedIndex];
        const price = parseFloat(selectedOption.getAttribute('data-price'));
        priceInput.value = price.toFixed(2);

        updateTotalAmount();

        const stockImages = {
            NVDA: 'images/nvidia.png',
            AAPL: 'images/applestock.png',
            GOOGL: 'images/google.png'
        };
        stockImage.src = stockImages[selectedOption.value];
    });

    updateTotalAmount();

    document.querySelector('.btn-sell').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'twofactor.html'; 
    });

    document.querySelector('.btn-buy').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'twofactor.html'; 
    });

});




