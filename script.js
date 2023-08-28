const colorButton = document.getElementById('colorButton');
const textElement = document.querySelector('p');

colorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    textElement.style.color = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
