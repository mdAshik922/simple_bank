
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
        balanceDollarAmount.innerText = addAmount + blanceAmount ;
    }
    else {
        balanceDollarAmount.innerText = previousBalance - addAmount; 
   }
   
};

document.getElementById('dollarAdd').addEventListener('click', function () {
    
    const addAmount = getInputValue('inputId');
    updateBalance('depositDollar', addAmount);
    

    updateTotalBalance(addAmount, true);
    //update balance
    // const balanceDollarAmount = document.getElementById('balanceDollar');
    // const blanceAmount = parseFloat(balanceDollarAmount.innerText);
    // const totalBlacneAmount = addAmount + blanceAmount ;
    // balanceDollarAmount.innerText = totalBlacneAmount;
});


    document.getElementById('dollarWithdraw').addEventListener('click', function () {
        const WithdrawDollarInputField = getInputValue('interWithdrawAmount');

        // const totalWithdrawDollar = document.getElementById('totalWithdrawDollar');
        // const previousWithdrawDollar = parseFloat(totalWithdrawDollar.innerText);
        // const newWithdrawDollar = WithdrawDollarInputField + previousWithdrawDollar;
        // totalWithdrawDollar.innerText = newWithdrawDollar;
        updateBalance('totalWithdrawDollar', WithdrawDollarInputField);

        // const balanceTotal = document.getElementById('balanceDollar');
        // const balanceText = balanceTotal.innerText;
        // const previousBalance = parseFloat(balanceText);
        // const newBalanceTOtal = previousBalance - WithdrawDollarInputField;
        // balanceTotal.innerText = newBalanceTOtal;
        updateTotalBalance(WithdrawDollarInputField, false);
    });
