const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.game-card');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const filter = pill.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
    });
  });
});
