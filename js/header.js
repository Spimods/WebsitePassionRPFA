const headerContainer = document.querySelector('.header-container');
function adjustHeaderHeight() {
  const windowHeight = window.innerHeight;
  const headerHeight = headerContainer.offsetHeight;
  const extraHeight = 0.09 * windowHeight; // Utiliser 10% de la hauteur de la fenêtre pour l'ajustement
  const newHeight = `calc(${headerHeight}px + ${extraHeight}px)`;
  headerContainer.style.height = newHeight;
}
window.addEventListener('load', adjustHeaderHeight);
window.addEventListener('resize', adjustHeaderHeight);
