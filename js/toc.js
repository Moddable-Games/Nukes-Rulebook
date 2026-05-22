(() => {
  const toc = document.getElementById('toc');
  if (!toc) return;

  const headings = document.querySelectorAll('.content h2');
  if (headings.length === 0) return;

  const list = document.createElement('ul');
  const links = [];

  headings.forEach((h, i) => {
    const id = h.id || 'section-' + i;
    h.id = id;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
    links.push({ a, id });
  });

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = 'Contents';
  toc.appendChild(title);
  toc.appendChild(list);

  // Scroll-based active state via IntersectionObserver
  let activeLink = null;

  function setActive(id) {
    if (activeLink) activeLink.classList.remove('active');
    const match = links.find(l => l.id === id);
    if (match) {
      match.a.classList.add('active');
      activeLink = match.a;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    }
  }, {
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  });

  headings.forEach(h => observer.observe(h));

  // Click highlights immediately (don't wait for scroll to settle)
  links.forEach(({ a, id }) => {
    a.addEventListener('click', () => setActive(id));
  });
})();
