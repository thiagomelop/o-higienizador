const cardHeader = document.querySelector('.card-header');
const arrowDown = document.querySelector('.arrow-down');
const cardContent = document.querySelector('.card-content');

cardHeader.addEventListener('click', toggleContent);

function toggleContent() {
  cardContent.classList.toggle('show');
  if (cardContent.classList.contains('show')) {
    arrowDown.style.transform = 'rotate(180deg)';
  } else {
    arrowDown.style.transform = 'rotate(0deg)';
  }
}









// Selecionar elementos
const linkAbrirModal = document.querySelector('.link-abrir-galeria');
const modal = document.getElementById('modal-galeria');
const fecharModal = document.querySelector('.fechar-modal');
const galeriaImagens = document.querySelector('.galeria-imagens');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

// Carregar imagens (exemplo com array de URLs)
const imagens = [
  'https://exemplo.com/imagem1.jpg',
  'https://exemplo.com/imagem2.jpg',
  'https://exemplo.com/imagem3.jpg'
];

imagens.forEach(imagem => {
  const imgElement = document.createElement('img');
  imgElement.src = imagem;
  imgElement.classList.add('galeria-imagem');
  galeriaImagens.appendChild(imgElement);
});

// Variáveis para controlar a navegação
let indiceImagemAtual = 0;
const numeroImagens = imagens.length;

// Função para mostrar a imagem atual
function mostrarImagemAtual() {
  galeriaImagens.childNodes.forEach((imgElement, index) => {
    imgElement.style.display = 'none';
  });
  galeriaImagens.childNodes[indiceImagemAtual].style.display = 'block';
}

// Mostrar imagem inicial
mostrarImagemAtual();

// Evento para seta esquerda
setaEsquerda.addEventListener('click', () => {
  if (indiceImagemAtual >= 0) {
    indiceImagemAtual--;
    mostrarImagemAtual();
  }
  // Desativar seta esquerda na primeira imagem
  if (indiceImagemAtual === 0) {
    setaEsquerda.disabled = true;
  } else {
    setaEsquerda.disabled = false;
  }
});

// Evento para seta direita
setaDireita.addEventListener('click', () => {
  if (indiceImagemAtual < numeroImagens - 1) {
    indiceImagemAtual++;
    mostrarImagemAtual();
  }
  // Desativar seta direita na última imagem
  if (indiceImagemAtual === numeroImagens - 1) {
    setaDireita.disabled = true;
  } else {
    setaDireita.disabled = false;
  }
});

// Abrir modal
linkAbrirModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Fechar modal
fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
