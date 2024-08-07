document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  
    var balanceElement = document.getElementById('account-balance');
    var currentBalance = parseFloat(localStorage.getItem('accountBalance')) || 0;
    balanceElement.textContent = 'ACCOUNT BALANCE: $' + currentBalance;
    document.getElementById('transfer-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var transferAmount = parseFloat(document.getElementById('transfer-amount').value);
        if (!isNaN(transferAmount) && transferAmount > 0 && transferAmount <= currentBalance) {
            currentBalance -= transferAmount;
            balanceElement.textContent = 'ACCOUNT BALANCE: $' + currentBalance;
            localStorage.setItem('accountBalance', currentBalance);
            document.getElementById('account-number').value = '';
            document.getElementById('transfer-amount').value = '';
            alert('Transfer successful. New balance is $' + currentBalance);
        } else {
            alert('Invalid transfer amount.');
        }
    });
});