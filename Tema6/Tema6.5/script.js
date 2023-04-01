function adaugaInput() {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Introduceti un cod de culoare";
    input.addEventListener("input", function () {
        var culoare = this.value;
        var regex = /^(#|0x)?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (regex.test(culoare)) {
            this.style.backgroundColor = culoare;
        } else {
            this.style.backgroundColor = "white";
        }
    });
    document.querySelector("form").appendChild(input);
}