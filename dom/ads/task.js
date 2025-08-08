document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rotator').forEach(rotator => {
      rotator.setAttribute('aria-live', 'polite');
  
      const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
      if (!cases.length) return;
  
      let idx = cases.findIndex(el => el.classList.contains('rotator__case_active'));
      if (idx === -1) idx = 0;
  
      const applyActive = i => {
        cases.forEach((el, k) => el.classList.toggle('rotator__case_active', k === i));
        const color = cases[i].dataset.color || '';
        rotator.style.color = color;
      };
  
      applyActive(idx);
  
      let timerId = null;
      let paused = false;
  
      const scheduleNext = () => {
        const speed = Math.max(100, parseInt(cases[idx].dataset.speed, 10) || 1000);
        timerId = setTimeout(() => {
          if (!paused) {
            idx = (idx + 1) % cases.length;
            applyActive(idx);
          }
          scheduleNext();
        }, speed);
      };
  
      scheduleNext();
  
      rotator.addEventListener('mouseenter', () => {
        paused = true;
        if (timerId) clearTimeout(timerId);
      });
  
      rotator.addEventListener('mouseleave', () => {
        if (paused) {
          paused = false;
          scheduleNext();
        }
      });
  
      window.addEventListener('pagehide', () => {
        if (timerId) clearTimeout(timerId);
      }, { once: true });
    });
  });