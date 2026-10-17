/* Seleciona os elementos HTML usados pelo sistema. */
const formulario = document.querySelector("#formulario");
const inputProduto = document.querySelector("#produto");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

/* Guarda a quantidade atual de produtos cadastrados. */
let total = 0;

/* Executa o cadastro quando o formulário é enviado. */
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  /* Lê o valor do campo e remove espaços extras. */
  const texto = inputProduto.value.trim();

  /* Valida o campo vazio antes de cadastrar. */
  if (texto === "") {
    mensagem.textContent = "Digite um produto.";
    mensagem.classList.add("mensagem-erro");
    return;
  }

  /* Cria o item da lista e adiciona o nome do produto. */
  const item = document.createElement("li");
  item.className = "item";

  const nomeProduto = document.createElement("span");
  nomeProduto.textContent = texto;
  item.appendChild(nomeProduto);

  /* Alterna o produto entre comprado e não comprado ao clicar no item. */
  item.addEventListener("click", function () {
    item.classList.toggle("comprado");
  });

  /* Cria o botão de remover produto. */
  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.className = "botao-remover";
  botaoRemover.textContent = "Remover";

  botaoRemover.addEventListener("click", function (evento) {
    evento.stopPropagation();
    item.remove();
    total -= 1;
    atualizarContador();
    mensagem.textContent = "Produto removido.";
    mensagem.classList.remove("mensagem-erro");
  });

  item.appendChild(botaoRemover);
  lista.appendChild(item);

  total += 1;
  atualizarContador();

  inputProduto.value = "";
  mensagem.textContent = "Produto cadastrado!";
  mensagem.classList.remove("mensagem-erro");
});

/* Atualiza o contador exibido na tela. */
function atualizarContador() {
  contador.textContent = total;
}
