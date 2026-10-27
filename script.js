    (() => {
      const menu = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.nav-links');
      const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); menu.querySelector('use').setAttribute('href', '#icon-menu'); };
      menu.addEventListener('click', () => { const opening = !nav.classList.contains('open'); nav.classList.toggle('open', opening); menu.setAttribute('aria-expanded', String(opening)); menu.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu'); menu.querySelector('use').setAttribute('href', opening ? '#icon-close' : '#icon-menu'); });
      nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
      document.addEventListener('click', e => { if (!nav.contains(e.target) && !menu.contains(e.target)) closeMenu(); });
      document.getElementById('year').textContent = String(new Date().getFullYear());
      const items = document.querySelectorAll('[data-reveal]');
      if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, {threshold: .1, rootMargin:'0px 0px -25px 0px'});
        items.forEach(item => observer.observe(item));
      } else { items.forEach(item => item.classList.add('visible')); }
    })();
