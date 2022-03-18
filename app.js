let body = document.querySelector('body')
let button = document.querySelector('.colorchanger')
let colorinput = document.querySelector('.color')

colorinput.addEventListener('input', () => {
    body.style.background = colorinput.value;
})

button.addEventListener('click', () => {
    color = createColor();
    body.style.background = color;
    button.innerHTML = color;
})

const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createColor = () => {
    let color = "rgb("
    for (let i = 0; i < 3; i++) {
        newcolor = generateNumber(0, 255);
        if (i != 2) {
            color += newcolor + ", "
        }
        else {
            color += newcolor + ")"
        }
    }
    return color;
}