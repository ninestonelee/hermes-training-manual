(function () {
  const progress = document.querySelector('[data-progress]');
  const updateProgress = () => {
    if (!progress) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    progress.style.width = `${pct}%`;
  };
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  document.querySelectorAll('.code').forEach((block) => {
    const button = block.querySelector('.copy');
    const code = block.querySelector('pre code');
    if (!button || !code) return;
    button.addEventListener('click', async () => {
      const text = code.innerText;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      const original = button.textContent;
      button.textContent = '복사됨';
      button.classList.add('done');
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove('done');
      }, 1400);
    });
  });

  const tocLinks = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  const tocMap = new Map(tocLinks.map((link) => [link.getAttribute('href').slice(1), link]));
  if ('IntersectionObserver' in window && tocLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) => {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        });
        const active = tocMap.get(entry.target.id);
        if (active) {
          active.classList.add('active');
          active.setAttribute('aria-current', 'location');
        }
      });
    }, { rootMargin: '-24% 0px -68% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
  }

  document.querySelectorAll('.mobile-toc a').forEach((link) => {
    link.addEventListener('click', () => {
      const details = link.closest('details');
      if (details) details.open = false;
    });
  });
})();
