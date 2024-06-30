var input = document.getElementById('number');
var submit = document.getElementById('submit');
var display = document.getElementById('display');
var sequence = [];
var sequenceLength = 0;
input.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace' ||
        event.key === 'Delete' ||
        event.key === 'Tab' ||
        event.key === 'Escape' ||
        event.key === 'Enter' ||
        (event.key >= '0' && event.key <= '9')) {
        var currentValue = parseInt(input.value + event.key, 10);
        if (currentValue > 100) {
            event.preventDefault();
        }
    }
    else {
        event.preventDefault();
    }
});
submit.addEventListener('click', function (event) {
    event.preventDefault();
    sequenceLength = Number(input.value);
    display.innerHTML = '';
    if (sequenceLength <= 0) {
        display.textContent = 'Please enter a positive integer.';
        return;
    }
    sequence = [];
    if (sequenceLength >= 1) {
        sequence.push(0);
    }
    if (sequenceLength >= 2) {
        sequence.push(1);
    }
    for (var i = 2; i < sequenceLength; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    display.textContent = sequence.join(', ');
});
