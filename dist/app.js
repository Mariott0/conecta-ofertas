document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const mobileJoin = document.querySelector('.mobile-join');
const heroActions = document.querySelector('.hero-actions');
const finalCta = document.querySelector('.final-cta');

if (mobileJoin && heroActions && finalCta && 'IntersectionObserver' in window) {
  let heroPassed = false;
  let finalVisible = false;
  const updateButton = () => mobileJoin.classList.toggle('is-visible', heroPassed && !finalVisible);
  new IntersectionObserver(([entry]) => {
    heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
    updateButton();
  }).observe(heroActions);
  new IntersectionObserver(([entry]) => {
    finalVisible = entry.isIntersecting;
    updateButton();
  }).observe(finalCta);
}
