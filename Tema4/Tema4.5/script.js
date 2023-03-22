const dictionary = {
    "acesta": "this",
    "este": "is",
    "un": "a",
    "dicționar": "dictionary"
  };
  
  function translate(phrase) {
    const words = phrase.split(' ');
    let translated = '';
    for (const word of words) {
      const translatedWord = dictionary[word] || `${word}?`;
      translated += `${translatedWord} `;
    }
    return translated.trim();
  }

  let input = '';
  do {
    input = prompt('Introduceti o fraza de tradus:');
    if (input) {
      const translation = translate(input);
      alert(`Traducerea mot-à-mot: ${translation}`);
    }
  } while (input && confirm('Alta fraza?'));
  
  alert('Programul s-a incheiat.');