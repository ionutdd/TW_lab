window.onload = function() {
    // Obțineți elementele DOM
    const button = document.getElementById("myButton");
    const quoteText = document.getElementById("quote-text");
    const authorText = document.getElementById("author-text");
  
    // Definiți funcția pentru obținerea unui personaj aleatoriu din universul Star Wars
    const getRandomCharacter = async () => {
      // Generați un număr aleatoriu între 1 și 83 (numărul total de personaje din API-ul Star Wars)
      const randomNum = Math.floor(Math.random() * 83) + 1;
  
      // Faceți o cerere GET la API-ul Star Wars pentru a obține un personaj aleatoriu
      const response = await fetch(
        `https://swapi.dev/api/people/${randomNum}`
      );
  
      // Verificați dacă cererea a fost făcută cu succes
      if (response.ok) {
        // Parsați răspunsul pentru a obține un obiect JSON
        const data = await response.json();
  
        // Actualizați textul citatului și autorul
        quoteText.textContent = `Name: ${data.name}`;
        authorText.textContent = `Gender: ${data.gender}`;
      } else {
        // În caz contrar, afișați un mesaj de eroare
        quoteText.textContent = "Oops! Something went wrong.";
        authorText.textContent = "";
      }
    };
  
    // Adăugați un ascultător de evenimente la butonul "New Quote"
    button.addEventListener("click", getRandomCharacter);
  
    // Încărcați un personaj la încărcarea paginii
    getRandomCharacter();
};