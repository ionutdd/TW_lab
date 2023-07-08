let randomm = null;
let Pressed = false;
let ID;

function rrandom() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  if (random === null) {
    randomm = rrandom();
    localStorage.setItem('randomm', rrandom());
  }
  document.body.style.backgroundColor = rrandom();
}

window.onload = () => {document.body.addEventListener('keydown', function(event) {
  const keyCode = event.key;
  if (!Pressed && (keyCode >= 97 && keyCode <= 122)) {
    Pressed = true;
    ID = setInterval(changeColor, 3000);
  }
})};

window.onload = () => {document.getElementById('stil').addEventListener('change', function(event) {
  if (event.target.checked) {
    clearInterval(ID);
    document.body.style.backgroundColor = '#ffffff'; 
  }
})};

window.addEventListener('load', function() {
  const MyColor = localStorage.getItem('randomm');
  if (MyColor !== null) {
    document.body.style.backgroundColor = MyColor;
  }
});

