let persoane = [];

function adaugaPersoana() {
  let persoana = {
    nume: prompt("Introdu numele persoanei:"),
    cnp: prompt("Introdu CNP-ul persoanei:"),
    dataNasterii: prompt("Introdu data nasterii persoanei (formatul trebuie sa fie dd.mm.yyyy):")
  };

  let regexCNP = /^[1-9]\d{12}$/;
  if (!regexCNP.test(persoana.cnp)) {
    alert("CNP-ul introdus nu este valid.");
    return;
  }

  let regexDataNasterii = /^(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[0-2])[\.](19|20)\d{2}$/;
  if (!regexDataNasterii.test(persoana.dataNasterii)) {
    alert("Data nasterii introdusa nu este valida.");
    return;
  }

  persoane.push(persoana);

  let listaPersoane = document.querySelector("#lista-persoane");
  if (!listaPersoane) {
    console.error("Nu s-a gasit sectiunea cu id-ul lista-persoane");
    return;
  }

  listaPersoane.innerHTML = "";
  persoane.forEach(function(persoana) {
    let li = document.createElement("li");
    li.textContent = "Nume: " + persoana.nume + ", CNP: " + persoana.cnp + ", Data nasterii: " + persoana.dataNasterii;
    listaPersoane.appendChild(li);
  });
}

let butonAdauga = document.querySelector("button");
butonAdauga.addEventListener("click", adaugaPersoana);
