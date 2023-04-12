document.addEventListener("DOMContentLoaded", function() {

    const colorInputs = document.getElementsByName("color");
    const body = document.getElementsByTagName("body")[0];
    let intervalId;
    let selectedColor = localStorage.getItem("selectedColor");
  
    // Dacă există o culoare salvată în Storage, o setăm ca și culoarea curentă
    if (selectedColor) {
      for (let i = 0; i < colorInputs.length; i++) {
        if (colorInputs[i].value === selectedColor) {
          colorInputs[i].checked = true;
          body.style.backgroundColor = selectedColor;
          break;
        }
      }
    }
  
    // Selectăm un radio button aleator la fiecare 3 secunde
    intervalId = setInterval(function() {
      const index = Math.floor(Math.random() * colorInputs.length);
      colorInputs[index].checked = true;
      body.style.backgroundColor = colorInputs[index].value;
    }, 3000);
  
    // Oprim selecția la apăsarea oricărui element de pe ecran
    document.addEventListener("click", function() {
      clearInterval(intervalId);
      // Salvăm ultima culoare selectată în Storage
      for (let i = 0; i < colorInputs.length; i++) {
        if (colorInputs[i].checked) {
          localStorage.setItem("selectedColor", colorInputs[i].value);
          break;
        }
      }
    });
  
  });