function tema_1(arr) {
    const pare = arr.filter((el) => el % 2 === 0);
    const impare = arr.filter((el) => el % 2 === 1);
    
    return { pare, impare };
  }
  
  function render_list(title, arr) {
    const listE = arr.map((el) => `<li>${el}</li>`).join(" ");
    return `<h2>${title}</h2><ul>${listE}</ul>`;
  }
  
  const { pare, impare } = tema_1([1, 2, 3, 4, 5, 6]);
  
  const html = render_list("Pare", pare) + render_list("Impare", impare);
  
  document.write(html);
  