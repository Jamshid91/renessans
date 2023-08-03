const productInfo = document.querySelectorAll('.product-page-info-item .list');


productInfo.forEach(info => {
    info.addEventListener('click', () => {
        productInfo.forEach(rem => {
            rem.classList.remove('active')
        })
        info.classList.add('active')
    });
});