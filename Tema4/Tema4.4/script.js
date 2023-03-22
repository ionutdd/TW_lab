const persoane = [
    { nume: "Aaa", varsta: 15 },
    { nume: "Bbb", varsta: 20 },
    { nume: "Ccc", varsta: 25 },
    { nume: "Ddd", varsta: 30 },
  ];
  
  const numar = parseInt(prompt("Introdu o varsta:"));
  
  const persoaneFiltrate = persoane.filter((persoana) => persoana.varsta <= numar);
  
  if (persoaneFiltrate.length > 0) {
    const numePersoane = persoaneFiltrate.map((persoana) => persoana.nume).join(", ");
    const mesaj = `${persoaneFiltrate.length} persoane: ${numePersoane}`;
  
    alert(mesaj);
  } else {
    alert("Nu exista persoane cu varsta mai mica");
  }