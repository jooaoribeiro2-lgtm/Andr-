function enviar(e) {
  e.preventDefault();
  document.getElementById('aviso').textContent = 'Mensagem enviada com sucesso!';
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensagem').value = '';
}
