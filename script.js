// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Formulário de contato
function enviarForm(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Mensagem enviada com sucesso!';
  e.target.reset();
  setTimeout(() => { msg.textContent = ''; }, 4000);
}

// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
