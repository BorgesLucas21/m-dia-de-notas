document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let nota1 = parseFloat(Document.getElementById('nota1').value);
    let nota2 = parseFloat(Document.getElementById('nota2').value);
    let nota3 = parseFloat(Document.getElementById('nota3').value);

    let media = (nota1 + nota2 + nota3) / 3;

    let resultadoDiv = document.getElementById('resultado')
    if (media >= 6.0) {
        resultadoDiv.innerHTML = `<p class="aprovado">Aprovado! Sua média foi: ${media.toFixed(2)}</p>`;
    } else {
        resultadoDiv.innerHTML = `<p class="reprovado">REPROVADO;c! Sua média foi: ${media.toFixed(2)}</p>`;
    }
});