const productInfo = document.querySelectorAll('.product-page-info-item .list'),
      consultationBtn = document.querySelector('.consultation__btn'),
      callPopUpBtn = document.querySelector('.callPopUp_btn'),
      popUpConsultation = document.querySelector('.popUp.consultation'),
      callPopUp = document.querySelector('.callPopUp')


productInfo.forEach(info => {
    info.addEventListener('click', () => {
        productInfo.forEach(rem => {
            rem.classList.remove('active')
        })
        info.classList.add('active')
    });
});

consultationBtn.addEventListener('click', () => {
    popUpConsultation.classList.remove('d-none')
});

callPopUpBtn.addEventListener('click', () => {
    callPopUp.classList.remove('d-none')
});