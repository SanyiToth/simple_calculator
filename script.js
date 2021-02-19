const elDisplay = document.getElementById("display")
const elBtns = document.querySelectorAll("button")

elBtns.forEach(button => {
    button.addEventListener('click', event => {
        const clickedButtonValue = event.target.value
        if (clickedButtonValue === '=') {
            if (elDisplay.value !== '') {
                elDisplay.value = eval(elDisplay.value);
            }
        } else if (clickedButtonValue === 'C') {
            elDisplay.value = '';
        } else {
            elDisplay.value += clickedButtonValue;
        }
    })
})











