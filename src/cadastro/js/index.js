
const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const logado = document.querySelector("#logado");
logado.innerHTML = `Olá, ${userLogado.nome}`;