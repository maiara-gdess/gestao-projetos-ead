// Botão "Ver modelos": rolagem suave até a seção de modelos
const btnVerModelos = document.getElementById('btn-ver-modelos');
const secaoModelos = document.getElementById('modelos');

if (btnVerModelos && secaoModelos) {
  btnVerModelos.addEventListener('click', (event) => {
    event.preventDefault();
    secaoModelos.scrollIntoView({ behavior: 'smooth' });
  });
}
