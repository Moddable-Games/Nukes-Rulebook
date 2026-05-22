(() => {
  const toc = document.getElementById('toc');
  if (!toc) return;

  const headings = document.querySelectorAll('.content h2');
  if (headings.length === 0) return;

  const list = document.createElement('ul');

  headings.forEach((h, i) => {
    const id = h.id || 'section-' + i;
    h.id = id;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = 'Contents';
  toc.appendChild(title);
  toc.appendChild(list);
})();
