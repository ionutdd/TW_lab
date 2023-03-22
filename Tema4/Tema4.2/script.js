function removeDuplicates(arr) {
    const dict = {};
    arr.forEach((el) => {
      dict[el + "_" + typeof el] = el;
    });
  
    return Object.values(dict);
  }