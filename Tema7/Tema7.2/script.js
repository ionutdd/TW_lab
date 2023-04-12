document.addEventListener("DOMContentLoaded", function() {

    const images = [
        "/mnt/c/users/ionut/Desktop/TW-lab/TW-lab7/Tema7.2/500.jfif",
        "/mnt/c/users/ionut/Desktop/TW-lab/TW-lab7/Tema7.2/404.jfif",
        "/mnt/c/users/ionut/Desktop/TW-lab/TW-lab7/Tema7.2/400.jfif"
    ];
  
    let currentIndex = 0;
    let timeoutId = null;
  
    const startButton = document.getElementById("startButton");
    const imageList = document.getElementsByTagName("img");
  
    const showNextImage = () => {
        // Schimba imaginea curenta cu urmatoarea
        imageList[currentIndex].src = images[currentIndex];
  
        // Incrementeaza indexul imaginii curente
        currentIndex++;
  
        // Verifica daca am ajuns la sfarsitul listei de imagini
        if (currentIndex === images.length) {
            currentIndex = 0;
        }
  
        // Programam urmatoarea schimbare de imagine
        timeoutId = setTimeout(showNextImage, 3000);
    };
  
    const stopImageRotation = () => {
        // Anuleaza programarea urmatoarei schimbari de imagine
        clearTimeout(timeoutId);
      
        // Seteaza toate imaginile din lista la sursa initiala
        for (let i = 0; i < imageList.length; i++) {
          imageList[i].src = imageList[i].getAttribute("data-original-src");
        }
      };

    if (startButton !== null) {
        startButton.addEventListener("click", () => {
            // Verifica daca imaginele sunt deja afisate
            if (imageList[0].src === images[0]) {
                // Daca da, oprim schimbarea imaginilor
                stopImageRotation();
                startButton.textContent = "Start";
            } else {
                // Daca nu, pornim schimbarea imaginilor
                showNextImage();
                startButton.textContent = "Stop";
            }
        });
    }
  
  });
  