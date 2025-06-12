document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  fetch('tours/list.json')
    .then(res => res.json())
    .then(tours => {
      const container = document.getElementById('tours-container');
      tours.forEach(tour => {
        const div = document.createElement('div');
        div.innerHTML = `
          <a href="tours/${tour.slug}.html?lang=${lang}">
            <img src="images/${tour.thumbnail}" alt="${tour.title[lang]}" style="width: 100%; border-radius: 10px;">
            <p>${tour.short[lang]}</p>
          </a>
        `;
        container.appendChild(div);
      });
    });
});
