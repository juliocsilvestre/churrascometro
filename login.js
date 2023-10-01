document.getElementById("email").addEventListener("input", function () {
    let email = this.value;
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    this.setCustomValidity(isValid ? "" : "Email inválido");
});

document.getElementById("confirmEmail").addEventListener("input", function () {
    let confirmEmail = this.value;
    let email = document.getElementById("email").value;
    this.setCustomValidity(confirmEmail === email ? "" : "Os e-mails não coincidem");
});

document.getElementById("cep").addEventListener("input", function () {
    let cep = this.value;
    let isValid = /^\d{5}-\d{3}$/.test(cep);
    this.setCustomValidity(isValid ? "" : "CEP inválido");
});
