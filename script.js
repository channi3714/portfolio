const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  mobileNav.hidden = !open;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}));

const newsSeries = {
  cupid: { label: '큐피드', count: 6, prefix: 'KakaoTalk_Photo_2026-11-25-18-23-50' },
  pepero: { label: '빼빼로', count: 6, prefix: 'KakaoTalk_Photo_2026-11-25-18-24-21' },
  christmas: { label: '크리스마스', count: 10, prefix: 'KakaoTalk_Photo_2026-11-25-18-23-24' },
};
const viewer = document.querySelector('.news-viewer');
if (viewer) {
  const image = viewer.querySelector('.news-image');
  const imageLink = viewer.querySelector('.news-image-link');
  const counter = document.querySelector('.news-counter');
  const tabs = document.querySelectorAll('.news-tabs [role="tab"]');
  let series = 'cupid';
  let index = 0;
  const renderNews = () => {
    const group = newsSeries[series];
    const file = `assets/card-news/${series}/${group.prefix}-${index + 1}.png`;
    image.src = file;
    image.alt = `${group.label} 카드뉴스 ${index + 1}장`;
    imageLink.href = file;
    counter.textContent = `${index + 1} / ${group.count}`;
    tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.series === series)));
  };
  const moveNews = direction => {
    const count = newsSeries[series].count;
    index = (index + direction + count) % count;
    renderNews();
  };
  viewer.querySelector('.prev').addEventListener('click', () => moveNews(-1));
  viewer.querySelector('.next').addEventListener('click', () => moveNews(1));
  tabs.forEach(tab => tab.addEventListener('click', () => {
    series = tab.dataset.series;
    index = 0;
    renderNews();
  }));
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      moveNews(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  let startX = null;
  viewer.addEventListener('pointerdown', event => { startX = event.clientX; });
  viewer.addEventListener('pointerup', event => {
    if (startX === null) return;
    const distance = event.clientX - startX;
    startX = null;
    if (Math.abs(distance) > 45) moveNews(distance < 0 ? 1 : -1);
  });
}

