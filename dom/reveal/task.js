document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal_active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -15% 0px', 
      threshold: 0
    });
  
    reveals.forEach(el => observer.observe(el));
  });