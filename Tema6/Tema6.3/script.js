let count = 0;
let lastElement = null;
window.addEventListener('contextmenu', e => {
    e.preventDefault();
    const div = document.createElement("div");
    div.innerText = ++count;
    div.style.top = e.clientY + 'px';
    div.style.left = e.clientX + 'px';
    div.style.backgroundColor = randomColor();
    lastElement?.remove();    //echivalent cu if(lastElement)  lastElement.remove();
    lastElement = div;
    document.body.append(div);
});

function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
};

function randomColor() {
    const r = randomInt(0, 255);
    const g = randomInt(0, 255);
    const b = randomInt(0, 255);
    return `rgb(${r},${g},${b})`;
};

