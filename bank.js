
function getInputValue(inputId) {
    const addAmount = document.getElementById(inputId);
    const depositAmountText = addAmount.value;
    const newDepositAmount = parseFloat(depositAmountText);
    addAmount.value = '';
    
    return newDepositAmount;
};

function updateBalance(depositDollar, amount) {
    const showAddAmount = document.getElementById(depositDollar);
    const previousDeposit = parseFloat(showAddAmount.innerText);

    const totalDeposit =  previousDeposit + amount;
    showAddAmount.innerText = totalDeposit;
};


function updateTotalBalance() {
    const balanceTotal = document.getElementById('balanceDollar');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
   
    if () {
        
    }
    else {
};

document.getElementById('dollarAdd').addEventListener('click', function () {
    
    const addAmount = getInputValue('inputId');
    updateBalance('depositDollar', addAmount);
    
    //update balance
    const balanceDollarAmount = document.getElementById('balanceDollar');
    const blanceAmount = parseFloat(balanceDollarAmount.innerText);
    const totalBlacneAmount = lal + blanceAmount ;
    balanceDollarAmount.innerText = totalBlacneAmount;
});


document.getElementById('dollarWithdraw').addEventListener('click', function(){
    const WithdrawDollarInputField = getInputValue('interWithdrawAmount');

    
    updateBalance('totalWithdrawDollar', WithdrawDollarInputField);

    const balanceTotal = document.getElementById('balanceDollar');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalanceTOtal = previousBalance - WithdrawDollarInputField;
    balanceTotal.innerText = newBalanceTOtal;
});


