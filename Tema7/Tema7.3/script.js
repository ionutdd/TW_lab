window.onload = () => {
    const div = document.querySelector('div');
    const visits = parseInt(localStorage.getItem('visits')) || 0;
    for (let i = 0; i < visits; i++) {
        div.innerText = div.innerText + 'o';
    }
    localStorage.setItem('visits', visits + 1);
}

