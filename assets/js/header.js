const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.burger__btn'),
      openCatalog = document.querySelector('.openCatalog'),
      backCatalog = document.querySelector('.backCatalog'),
      body = document.querySelector('body'),
      popUp = document.querySelectorAll('.popUp'),
      popUpClose = document.querySelectorAll('.popUp__close'),
      backCall = document.querySelectorAll('.backCall__btn'),
      popUpBackCall = document.querySelector('.backCall')


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btnClick');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
    backCatalog.parentElement.classList.add('d-none');
    backCatalog.parentElement.previousElementSibling.classList.remove('d-none');
});

openCatalog.addEventListener('click', () => {
    openCatalog.parentElement.classList.add('d-none');
    openCatalog.parentElement.nextElementSibling.classList.remove('d-none');
});

backCatalog.addEventListener('click', () => {
    backCatalog.parentElement.classList.add('d-none');
    backCatalog.parentElement.previousElementSibling.classList.remove('d-none');
});

window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
        if(e.target == popup) {
            popup.classList.add('d-none');
        }
    });
});

popUpClose.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.parentElement.classList.add('d-none');
    })
});

backCall.forEach(call => {
    call.addEventListener('click', () => {
        popUpBackCall.classList.remove('d-none')
    })
})

// input mask
$(":input").inputmask();
$(".phone").inputmask({"mask": "+7(999) 999-99-99"});


