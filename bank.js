
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


function updateTotalBalance(addAmount, isAdd) {
    const balanceDollarAmount = document.getElementById('balanceDollar');
    const balanceText = balanceDollarAmount.innerText;
    const blanceAmount = parseFloat(balanceText);
    
    if (isAdd == true) {
        balanceDollarAmount.innerText = addAmount + blanceAmount;
    }
    else {
        balanceDollarAmount.innerText =  blanceAmount - addAmount;
    };
   
};

document.getElementById('dollarAdd').addEventListener('click', function () {
    const addAmount = getInputValue('inputId');
    if (addAmount) {
        updateBalance('depositDollar', addAmount);
    updateTotalBalance(addAmount, true);
   }
});


    document.getElementById('dollarWithdraw').addEventListener('click', function () {
        const WithdrawDollarInputField = getInputValue('interWithdrawAmount');
        
        updateBalance('totalWithdrawDollar', WithdrawDollarInputField);
        updateTotalBalance(WithdrawDollarInputField, false);
    });
