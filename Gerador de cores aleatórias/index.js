const generateBtn = document.getElementById('generateBtn');
const colorBox = document.getElementById('color-box')

generateBtn.addEventListener('click', () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor;
});

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}