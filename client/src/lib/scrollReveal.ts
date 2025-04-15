export default function setupScrollReveal() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initScrollReveal() {
    const elementsToReveal = document.querySelectorAll('.reveal-element');
    elementsToReveal.forEach(el => observer.observe(el));
  }

  // Initialize on page load
  if (document.readyState === 'complete') {
    initScrollReveal();
  } else {
    window.addEventListener('load', initScrollReveal);
  }

  // Initialize again after React hydration
  setTimeout(initScrollReveal, 500);

  return {
    refresh: initScrollReveal
  };
}