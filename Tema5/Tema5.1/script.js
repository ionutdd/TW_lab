function tema1()
{
    const elements = document.getElementsByTagName("li");
    const seasons = [...elements].map(el => el.innerText);
    for (let i = 0; i < elements.length; i++)
    {
        const [season , emoji] = seasons[i].split(" ");
        elements[i].innerText = `${emoji} Anotimpul ${i+1} (urmat de ${seasons[(i+1)%elements.length]})`; 
    }
}

window.onload=tema1;