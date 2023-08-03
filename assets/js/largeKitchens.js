const kitchens = document.querySelectorAll('.large-kitchens-item .kitchen');


kitchens.forEach(kitchen => {
    kitchen.addEventListener('click', () => {
        kitchens.forEach(rem => {
            rem.classList.remove('active')
        })
        kitchen.classList.add('active')
    })
})