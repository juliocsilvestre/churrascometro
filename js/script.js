const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");
const inputBebeAlcool = document.getElementById("bebeAlcool");

inputAdultos.addEventListener("input", function () {
    if (this.value < 0) {
        this.value = 0;
    }
});

inputCriancas.addEventListener("input", function () {
    if (this.value < 0) {
        this.value = 0;
    }
});

inputDuracao.addEventListener("input", function () {
    if (this.value < 0) {
        this.value = 0;
    }
});

inputBebeAlcool.addEventListener("input", function () {
    if (this.value < 0) {
        this.value = 0;
    }
});

const resultado = document.getElementById("resultado");

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
});

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 1400;
    } else {
        return 800;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 2) {
        return 4000;
    } else {
        return 2000;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 3500;
    } else {
        return 2000;
    }
}

function calcular() {
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;
    const bebeAlcool = document.getElementById("bebeAlcool").value || 0;

    const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    const qdtTotalCerveja = cervejaPP(duracao) * bebeAlcool;
    const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    const qdtCervejaBebeAlcool = cervejaPP(duracao) * bebeAlcool;

    const qdtBebidasNaoBebeAlcool =
        bebidasPP(duracao) * (adultos - bebeAlcool) + (bebidasPP(duracao) / 2) * criancas;

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`;
    resultado.innerHTML += `
    <div class="result-block">
      <img src="/assets/carne.svg"/>
      <p>${qdtTotalCarne / 1000} Kg de Carne</p>
    </div>
  `;
    resultado.innerHTML += `
    <div class="result-block">
      <img src="/assets/cerveja.svg"/>
      <p>${Math.ceil(qdtCervejaBebeAlcool / 355)} latas de Cerveja</p>
    </div>
  `;
    resultado.innerHTML += `
    <div class="result-block">
      <img src="/assets/refri.svg"/>
      <p>${Math.ceil(qdtBebidasNaoBebeAlcool / 2000)} garrafas de Bebidas</p>
    </div>
    </br>
    </br>
    </br>
    </br>
    </br>
  `;
}
