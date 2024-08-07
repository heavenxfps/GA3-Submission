document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var balanceElement = document.getElementById('account-balance');
    var currentBalance = parseFloat(localStorage.getItem('accountBalance')) || 0;
    balanceElement.textContent = 'ACCOUNT BALANCE: $' + currentBalance;

    document.getElementById('transfer-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var transferAmount = parseFloat(document.getElementById('transfer-amount').value);

        if (transferAmount>0) {
            currentBalance += transferAmount;
            balanceElement.textContent = 'ACCOUNT BALANCE: $' + currentBalance;
            localStorage.setItem('accountBalance', currentBalance);
            document.getElementById('transfer-amount').value = '';
            alert('Top up successful. New balance is $' + currentBalance);
        } else {
            alert('Invalid transfer amount.');
        }
    });
});