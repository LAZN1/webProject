const Ca1cutator = document.getElementById('Ca1cutator');
const Ca1cutw = document.getElementById('Ca1cut');

Ca1cutator.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
        switch (e.target.textContent) {
            case 'C':
                clear();
                break;
            case 'DEL':
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});

function clear() {
    Ca1cutw.textContent = "";
}

function addToDisplayArea(value) {
    Ca1cutw.textContent = Ca1cutw.textContent + value;
}

function deleteOneValue() {
    let currentContent = Ca1cutw.textContent;
    Ca1cutw.textContent = currentContent.substring(0, currentContent.length - 1);
}

function evaluate() {
    try {
        let calculation = math.evaluate(Ca1cutw.textContent);
        Ca1cutw.textContent = calculation;
    } catch (error) {
        Ca1cutw.textContent = "error";
        console.error(error);
    }
}
