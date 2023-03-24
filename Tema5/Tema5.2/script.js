function addInfo(info, ...classes)
{
    const articles = [... document.querySelectorAll("article article")];
    articles.forEach(el => {
        const p = document.createElement("p");
        p.innerText = info;
        p.className = classes.join(" ");
        el.append(p);
    })
}

window.onload = function(){
    addInfo('text','cls1','cls2');
}