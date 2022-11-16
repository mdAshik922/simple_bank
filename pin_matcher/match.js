function getPin() {
    const pin = Math.round(Math.random()*1000);
    const stringPin = pin + '';
    
    if (stringPin.length == 3) {
        return pin;
    }
    else{
        return getPin();
    }
};

function generatePin() {
    const pins = getPin();
    document.getElementById('pinNumber').value = pins;
};

document.getElementById('keyPressShow_number').addEventListener('click', function (event) {
    const click_number = event.target.innerText;
    const calc = document.getElementById('key_pad');
    const priviousClac = calc.value;
    const newCalc = priviousClac + click_number;
    calc.value = newCalc;
});

