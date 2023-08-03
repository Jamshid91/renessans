const allFilter = document.querySelectorAll('.allFilter'),
      showFilter = document.querySelector('.showFilter__btn'),
      closeFilter = document.querySelector('.close-filter'),
      filters = document.querySelector('.filters-border')


allFilter.forEach(all => {
    let count = 0;
    all.addEventListener('click', () => {
        if(count == 0) {
            all.parentElement.classList.remove('hiddenItem');
            all.textContent = 'Свернуть'
            return count = 1;
        } else {
            all.parentElement.classList.add('hiddenItem');
            all.textContent = 'Посмотреть все'
            return count = 0;
        }
    })
});


showFilter.addEventListener('click', () => {
    filters.classList.remove('d-none')
});
closeFilter.addEventListener('click', () => {
    filters.classList.add('d-none')
});