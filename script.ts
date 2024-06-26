const input = document.getElementById('number') as HTMLInputElement;
const submit = document.getElementById('submit') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLDivElement;

let sequence: number[] = [];
let sequenceLength: number = 0;

input.addEventListener('keydown', (event) => {
    if (
        event.key === 'Backspace' ||
        event.key === 'Delete' ||
        event.key === 'Tab' ||
        event.key === 'Escape' ||
        event.key === 'Enter' ||
        (event.key >= '0' && event.key <= '9')
    ) {
        const currentValue = parseInt(input.value + event.key, 10);

        if (currentValue > 100) {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
    }
});

submit.addEventListener('click', (event) => {
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

    for (let i = 2; i < sequenceLength; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    display.textContent = sequence.join(', ');
});
