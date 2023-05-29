const form = document.getElementById("form-contatos");

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLine();
});

function addLine() {
  const inputNome = document.getElementById("form-nome");
  const inputSobrenome = document.getElementById("form-sobrenome");
  const inputDDD = document.getElementById("form-ddd");
  const inputTelefone = document.getElementById("form-telefone");

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputSobrenome.value}</td>`;
  linha += `<td>${inputDDD.value}</td>`;
  linha += `<td>${inputTelefone.value}</td>`;
  linha += "<tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");

  corpoTabela.innerHTML = linhas;

  inputNome.value = "";
  inputSobrenome.value = "";
  inputDDD.value = "";
  inputTelefone.value = "";

  inputNome.focus();
}
