const counterEl = document.querySelector('.counter');
const counterTitleEL = document.querySelector('.counter__title')
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');

const counterValueEl = document.querySelector('.counter__value');

resetButtonEl.addEventListener('click', () => {
    // set value to 0
    counterValueEl.textContent = 0;
    // reset background color
    counterEl.classList.remove('counter--limit');
    // reset counter title
    counterTitleEL.textContent = 'Fancy Counter';
    // enable buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    // unfocus (blur)
    resetButtonEl.blur();
});

 const incrementCounter = () => {
    // get current value of counter
    const currentValue = counterValueEl.textContent; 
    // convert value to number type
        const currentValueAsNumber = +currentValue;
    // increment by 1
        let newValue = currentValueAsNumber + 1; // In order to prevent value to not go above five, variable must be let.

    // check to see if value is more than 5
        if (newValue > 5) {
            // if it is more than 5, force it to be 5;
            newValue = 5;
            // give visual indicator limit has been reached.
            counterEl.classList.add('counter--limit'); // no "." in front of counter-limit" because classList is used.
            // updated counter title to say limit has been reached.
            counterTitleEL.innerHTML = 'Limit! Buy Pro for >5'
            // disable both buttons when value > 5
            increaseButtonEl.disabled = true;
            decreaseButtonEl.disabled = true;
                // unfocus (blur)
            increaseButtonEl.blur();

        }


    // set counter element with new value
        counterValueEl.textContent = newValue;
}


increaseButtonEl.addEventListener('click', incrementCounter);

decreaseButtonEl.addEventListener('click', () => {
    // get current value of counter
        const currentValue = counterValueEl.textContent; 
    // convert value to number type
        const currentValueAsNumber = +currentValue;
    // decrement by 1
        let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
        if (newValue < 0) {
            // if it is less than 0, force it to be zero;
            newValue = 0;
        }

    // set counter element with new value
        counterValueEl.textContent = newValue;

        // unfocus (blur)
        decreaseButtonEl.blur();        
});

document.addEventListener('keydown', incrementCounter);