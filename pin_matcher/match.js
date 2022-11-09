function getPin() {
    const pin = Math.random() * 500;;
    const strinngPin = pin+' ';
    if(stringPin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
   document.getElementById('generatePin_show').value;
};
