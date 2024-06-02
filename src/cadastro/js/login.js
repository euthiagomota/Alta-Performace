function entrar() {
  const username = document.getElementById('username').value;
const usernameLabel = document.getElementById('userLabel')
const password = document.getElementById('password').value;
const passwordLabel = document.getElementById('passwordLabel')
const msgErrorLogin = document.getElementById('msgError');
const msgSuccessLogin = document.getElementById('msgSucess')

// Obtém a lista de usuários do localStorage
let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

// Verifica se o usuário e a senha correspondem a algum cadastro
let userValid = listaUser.find(user => user.userCad === username && user.senhaCad === password);


if (userValid) {
  msgSuccessLogin.style.display = 'block';
  msgSuccessLogin.innerHTML = '<strong>Logando...</strong>';
  msgErrorLogin.style.display = 'none';
  msgErrorLogin.innerHTML = '';

  setTimeout(() => {
      window.location.href = '../../home/home.html'; // Redireciona para a página inicial ou dashboard
  }, 2000);
} else {
  msgErrorLogin.style.display = 'block';
  msgErrorLogin.innerHTML = '<strong>Usuário ou senha incorretos!</strong>';
  msgSuccessLogin.style.display = 'none';
  msgSuccessLogin.innerHTML = '';
}
  
}