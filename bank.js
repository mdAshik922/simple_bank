
    const sames = document.getElementsByClassName('smae');

for (const same of sames) {
    same.style.backgroundColor = "rgb(133, 158, 211)";
    same.style.width = '150px';
    }

document.getElementById('total_Balance').style.backgroundColor = 'light-blue';
document.getElementById('total_Balance').style.width = '150px';
const p_ElementCreate = document.createElement('p');
const p_ElementCreate_Next = document.createElement('p');
const span_Create = document.createElement('span');
span_Create.id = 'balanceDollar';

p_ElementCreate.innerHTML = 'Balance';
p_ElementCreate.style.textAlign = 'center';
p_ElementCreate.style.fontSize = 'large';

p_ElementCreate_Next.innerHTML = '$';
p_ElementCreate_Next.style.textAlign = 'center';
p_ElementCreate_Next.style.fontSize = 'large';

span_Create.innerHTML = '00';
span_Create.style.textAlign = 'center';
span_Create.style.fontSize = 'large';

document.getElementById('total_Balance').appendChild(p_ElementCreate);
document.getElementById('total_Balance').appendChild(p_ElementCreate_Next);
p_ElementCreate_Next.appendChild(span_Create);




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

    if (addAmount > 0) {
        updateBalance('depositDollar', addAmount);
    updateTotalBalance(addAmount, true);
    };
});

document.getElementById('dollarWithdraw').addEventListener('click', function () {
    const WithdrawDollarInputField = getInputValue('interWithdrawAmount');
    
    if (WithdrawDollarInputField > 0) {
        updateBalance('totalWithdrawDollar', WithdrawDollarInputField);
    updateTotalBalance(WithdrawDollarInputField, false);
    };
});
