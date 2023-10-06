document.getElementById("email").addEventListener("input", function () {
    let email = this.value;
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.setCustomValidity(isValid ? "" : "Email inválido");

    if (email.length > 0) {
        this.classList.add("filled");
    } else {
        this.classList.remove("filled");
    }

    checkInputs();
});

document.getElementById("confirmEmail").addEventListener("input", function () {
    let confirmEmail = this.value;
    let email = document.getElementById("email").value;
    this.setCustomValidity(confirmEmail === email ? "" : "Os e-mails não coincidem");

    if (confirmEmail.length > 0) {
        this.classList.add("filled");
    } else {
        this.classList.remove("filled");
    }

    checkInputs();
});

document.getElementById("cep").addEventListener("input", function () {
    let cep = this.value;
    let isValid = /^\d{5}-\d{3}$/.test(cep);
    this.setCustomValidity(isValid ? "" : "CEP inválido");

    checkInputs();
});

document.getElementById("nome").addEventListener("input", function () {
    checkInputs();
});

document.getElementById("promocoes").addEventListener("change", function () {
    checkInputs();
});

function checkInputs() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let promocoes = document.getElementById("promocoes").checked;

    let submitLink = document.querySelector(".input-field.login a");

    if (nome !== "" && email !== "" && cep !== "" && promocoes) {
        submitLink.classList.remove("disabled");
        submitLink.style.pointerEvents = "auto";
        submitLink.style.backgroundColor = "#007bff";
    } else {
        submitLink.classList.add("disabled");
        submitLink.style.pointerEvents = "none";
        submitLink.style.backgroundColor = "#ccc";
    }
}
