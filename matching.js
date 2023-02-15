function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        console.log(pinString);
        return pinString;
    }
    else {
        getPin()
    }
}

document.getElementById('pin__generate__btn').addEventListener('click', function () {
    const generateField = document.getElementById('generate__field')
    const pin = getPin();
    generateField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedField = document.getElementById('typed__field');
    const previousTypedNumber = typedField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedField.value = newTypedNumber;


    }
    console.log()
})

document.getElementById('verify__pin').addEventListener('click', function () {
    const displayField = document.getElementById('generate__field');
    const currentPin = displayField.value;

    const typedField = document.getElementById('typed__field');
    const typedNumber = typedField.value;

    const failedMessage = document.getElementById('failed__message');
    const successMessage = document.getElementById('success__message');
    console.log(currentPin, typedNumber)
    if (currentPin === typedNumber) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failedMessage.style.display = 'block';
    }
})