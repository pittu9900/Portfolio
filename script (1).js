// Scroll-spy: highlight the active "sheet tab" based on which section is in view
const tabs = Array.from(document.querySelectorAll('.tab'));
const sections = tabs
  .map(tab => document.querySelector(tab.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        tabs.forEach(tab => {
          tab.classList.toggle('is-active', tab.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

// Let the left/right arrow buttons (visible only if you add them back in CSS)
// nudge the tab row on very small screens. Hidden by default via CSS.
document.querySelectorAll('.tabs__scroller').forEach(btn => {
  btn.addEventListener('click', () => {
    const track = document.getElementById('tabsTrack');
    const dir = Number(btn.dataset.dir) || 1;
    track.scrollBy({ left: dir * 140, behavior: 'smooth' });
  });
});
