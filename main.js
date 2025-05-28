const hamburger = document.getElementById('hamburger');
const navCenter = document.querySelector('.nav-center');
const checkbox = document.getElementById('checkbox');
const body = document.body;
const logo = document.getElementById('logo-img');

function enviarDados() {
  const nomeUsuario = document.getElementById('name').value.trim();
  const emailUsuario = document.getElementById('email').value.trim();
  const termosUso = document.getElementById('termosUso').checked;
  const modalTexto = document.querySelector("#modalSucesso .modal-conteudo p");

  const dados = {
    nome: nomeUsuario,
    email: emailUsuario,
    termosUso: termosUso
  };

  fetch('https://precadastro-rivalix4-56db18aa8f29.herokuapp.com/usuarios', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  })
    .then(async response => {
      const err = await response.json().catch(() => ({}));
      if (!response.ok) {
        const msg = err.nome || err.email || err.termosUso || err.erro ||
          'Erro ao enviar. Verifique os campos e tente novamente.';
        throw new Error(msg);
      }
      return err;  // aqui já é o “data” de sucesso
    })
    .then(data => {
      modalTexto.textContent = "Obrigado por se inscrever! Você receberá novidades em breve.";
      submitBtn.innerText = 'Enviado';
      modal.style.display = 'flex';
    })
    .catch(error => {
      console.error("Erro:", error);
      modalTexto.textContent = error.message; // Mostra mensagem específica do backend
      modal.style.display = 'flex';           // Garante que o modal aparece
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar Pré-Cadastro';
    });
}
// Abrir/fechar menu hamburguer
hamburger.addEventListener('click', () => {
  navCenter.classList.toggle('active');
});

// Função para aplicar tema
function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add('light-theme');
    checkbox.checked = true;
    logo.src = "img/image.png"; // logo para tema claro
    logoFooter.src = "img/image.png";
  } else {
    body.classList.remove('light-theme');
    checkbox.checked = false;
    logo.src = "img/logo.png"; // logo para tema escuro
    logoFooter.src = "img/logo.png";
  }
}

// Verificar tema salvo no LocalStorage
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme);

// Alternar tema
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    applyTheme("light");
    localStorage.setItem('theme', 'light');
  } else {
    applyTheme("dark");
    localStorage.setItem('theme', 'dark');
  }
});

// Mensagem pós preenchimento
const form = document.getElementById('preRegistrationForm');
const submitBtn = document.getElementById('submitBtn');
const modal = document.getElementById('modalSucesso');
const fecharModal = document.getElementById('fecharModal');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerText = 'Enviando...';
  enviarDados(); // chama a função
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
  submitBtn.disabled = false;
  submitBtn.innerText = 'Enviar Pré-Cadastro';
  form.reset();
});

// Scroll Reveal
window.reveal = ScrollReveal({ reset: true })

ScrollReveal().reveal('.text-home', {
  origin: 'left',
  distance: '50px',
  duration: 800,
  delay: 100,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.image-home', {
  origin: 'right',
  distance: '50px',
  duration: 800,
  delay: 300,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.about-rivalix', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.features-title-effect', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 100,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.feature-card-effect', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.forms', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  scale: 0.95, // efeito leve de zoom-in
  easing: 'ease-out',
  reset: false
});

ScrollReveal().reveal('.slogan', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  delay: 200,
  scale: 1, // efeito leve de zoom-in
  easing: 'ease-out',
  reset: false
})

ScrollReveal().reveal('.videos-title', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 100,
  easing: 'ease-out',
  reset: false
});

ScrollReveal().reveal('.videos-subtitle', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 200,
  easing: 'ease-out',
  reset: false
});

ScrollReveal().reveal('.video-card', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200, // anima cada vídeo em sequência
  easing: 'ease-out',
  reset: false
});

const videos = document.querySelectorAll('.video-card');
videos.muted = true;