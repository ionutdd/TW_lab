function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let n = getRandomInt(12, 17);


let ul = document.createElement('ul');
window.onload = () => {
  document.body.appendChild(ul);
};

for(let i = 1; i <= n; i++) {
  let li = document.createElement('li');
  li.textContent = 'Item ' + i;
  li.dataset.clickCount = 0;
  ul.appendChild(li);
}


ul.addEventListener('click', function(event) {
  let target = event.target;
  
  if(target.tagName === 'LI') {
    let clickCount = parseInt(target.dataset.clickCount);
    clickCount++;
    target.dataset.clickCount = clickCount;
    if(clickCount === 1){
      target.innerHTML += ` <span style="color:purple">${clickCount}</span>`;
    } else {
      target.lastChild.textContent = clickCount;
    }

  } else {
    let lis = ul.getElementsByTagName('li');
    for(let i = lis.length - 1; i >= 0; i--) {
      if(parseInt(lis[i].dataset.clickCount) > 0) {
        ul.removeChild(lis[i]);
      }
    }
  }
});
