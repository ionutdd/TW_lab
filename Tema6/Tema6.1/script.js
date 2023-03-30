window.addEventListener('load', () => {
    const keys = [];
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        document.body.append(div);
        keys.push(div);
    }


    window.addEventListener("keydown", e => {
        keys[e.key].style.backgroundColor = "red";
    });

    window.addEventListener("keyup", e => {
        keys[e.key].style.backgroundColor = null;
    });

});