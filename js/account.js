document.getElementById("nome").addEventListener("input", checkInputs);
document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("cep").addEventListener("input", checkCep);
document.getElementById("promocoes").addEventListener("change", checkInputs);

document.addEventListener("DOMContentLoaded", function () {
    let submitLink = document.querySelector(".input-field.login a");
    submitLink.classList.add("disabled");
    submitLink.style.pointerEvents = "none";
});

document.getElementById("nome").addEventListener("input", function () {
    let nome = this.value;
    let formattedNome = nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

    if (formattedNome !== nome) {
        this.value = formattedNome;
    }
});

document.getElementById("cep").addEventListener("input", function () {
    let cep = this.value;
    let formattedCep = cep.replace(/\D/g, "").slice(0, 8);

    if (formattedCep !== cep) {
        this.value = formattedCep;
    }

    if (formattedCep.length > 0) {
        this.classList.add("filled");
    } else {
        this.classList.remove("filled");
    }
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
    } else {
        submitLink.classList.add("disabled");
        submitLink.style.pointerEvents = "none";
    }
}

function checkEmail() {
    let email = this.value;
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let infoIcon = document.querySelector(".info-icon");
    let infoMessage = document.querySelector(".info-message");

    if (isValid) {
        this.setCustomValidity("");
        infoIcon.style.display = "none";
        infoMessage.style.display = "none";
    } else {
        this.setCustomValidity("Insira um e-mail válido");
        infoIcon.style.display = "inline-block";
        infoMessage.style.display = "block";
    }

    if (email.length > 0) {
        this.classList.add("filled");
    } else {
        this.classList.remove("filled");
    }

    checkInputs();
}

function checkCep() {
    let cep = this.value;
    let isValid = /^\d{8}$/.test(cep);

    if (!isValid) {
        this.setCustomValidity("Insira um CEP válido");
        cepErrorMessage.style.display = "block";
    } else {
        this.setCustomValidity("");
        cepErrorMessage.style.display = "none";

        let apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.erro) {
                    this.setCustomValidity("CEP não encontrado");
                } else {
                    document.getElementById("confirmAddressBtn").style.display = "block";

                    document
                        .getElementById("confirmAddressBtn")
                        .addEventListener("click", function () {
                            let confirmacao = confirm(
                                `Seu endereço "${data.logradouro}" está correto?`
                            );
                            if (confirmacao) {
                                alert("Endereço confirmado!");
                            }
                        });
                }
            })
            .catch((error) => console.error("Erro:", error));
    }

    if (cep.length > 0) {
        this.classList.add("filled");
    } else {
        this.classList.remove("filled");
    }

    checkInputs();
}
document.getElementById("cep").addEventListener("input", checkCep);
