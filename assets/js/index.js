const desiredBudget = document.querySelectorAll('.desired-budget-title'),
      desiredBudgetLists = document.querySelectorAll('.desired-budget-item li'),
      furniture = document.querySelectorAll('.type-furniture-title'),
      furnitureLists = document.querySelectorAll('.type-furniture-item li'),
      seoBtn = document.querySelector('.seo-info__btn'),
      orderBtn = document.querySelectorAll('.order__btn'),
      popUpCalculate = document.querySelector('.popUp.calculate'),
      zoomImgs = document.querySelectorAll('img.zoom'),
      popUpZoom = document.querySelector('.popUp.zoom'),
      buyBtn = document.querySelectorAll('.buy__btn'),
      popUpBy = document.querySelector('.buy'),
      applicationBtns = document.querySelectorAll('.howOrder-item__btn'),
      popUpApplication = document.querySelector('.popUp.application'),
      downloadImg = document.querySelector('.download__img'),
      downloadFile = document.querySelector('.download__file'),
      addPhoto = document.getElementById('addPhoto'),
      addFile = document.getElementById('addFile'),
      reviewRead = document.querySelectorAll('.review__read'),
      popUpReview = document.querySelector('.popUp.review')



desiredBudget.forEach(el => {
  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('desiredShow')
});
})

desiredBudgetLists.forEach(elem => {
    let activeText = elem.parentElement.previousElementSibling.children[0].children[1];
    elem.addEventListener('click', () => {
        activeText.textContent = elem.textContent;
        elem.parentElement.parentElement.classList.toggle('desiredShow')
    })
});


reviewRead.forEach(review => {
  review.addEventListener('click', () => {
    popUpReview.classList.remove('d-none')
  })
});


furniture.forEach(el2 => {
  el2.addEventListener('click', () => {
    el2.parentElement.classList.toggle('furnitureShow')
});
})

furnitureLists.forEach(elem2 => {
    let activeText = elem2.parentElement.previousElementSibling.children[0].children[1];
    elem2.addEventListener('click', () => {
        activeText.textContent = elem2.textContent;
        elem2.parentElement.parentElement.classList.toggle('furnitureShow')
    })
});


seoBtn.addEventListener('click', () => {
    seoBtn.parentElement.classList.toggle('showSeo');
    seoBtn.previousElementSibling.classList.toggle('shadowBox')
});

orderBtn.forEach(order => {
  order.addEventListener('click', () => {
    popUpCalculate.classList.remove('d-none');
  });
})


zoomImgs.forEach(zoom => {
  zoom.addEventListener('click', () => {
    popUpZoom.classList.remove('d-none');
    popUpZoom.children[0].children[0].src = zoom.previousElementSibling.src
  })
});

buyBtn.forEach(buy => {
  buy.addEventListener('click', () => {
      popUpBy.classList.remove('d-none')
  })
});





addPhoto.addEventListener('change', (e) => {
if(e.target.files.length > 0) {
let src = URL.createObjectURL(e.target.files[0]);
downloadImg.src = src;
addPhoto.parentElement.classList.add('d-none');
downloadImg.parentElement.classList.remove('d-none');
  downloadImg.nextElementSibling.textContent = e.target.files[0].name
}
});

addFile.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
  let src = URL.createObjectURL(e.target.files[0]);
  downloadFile.src = src;
  addFile.parentElement.classList.add('d-none');
  downloadFile.parentElement.classList.remove('d-none');
    downloadFile.nextElementSibling.textContent = e.target.files[0].name
  }
  });

const reviews = new Swiper('.swiper-review', {
    watchOverflow: true,
    spaceBetween: 15,
    pagination: {
        el: '.review-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
  
  });

  const ourWorkPhoto = new Swiper('.our-work .photo-swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.our-work .photo-swiper-btns .next',
      prevEl: '.our-work .photo-swiper-btns .prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      576: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 1,
      },
  }
  });

  const ourWorkVideo = new Swiper('.our-work .video-swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.our-work .video-swiper-btns .next',
      prevEl: '.our-work .video-swiper-btns .prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      576: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 1,
      },
  }
  });

  const productionPhoto = new Swiper('.production .photo-swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.production .photo-swiper-btns .next',
      prevEl: '.production .photo-swiper-btns .prev',
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      576: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 1,
      },
  }
  });

  const productionVideo = new Swiper('.production .video-swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.production .video-swiper-btns .next',
      prevEl: '.production .video-swiper-btns .prev',
    },
        breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 1,
        },
    }
  });


  const news = new Swiper('.swiper-news', {
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-news-next',
        prevEl: '.swiper-news-prev',
      },
      pagination: {
        el: '.swiper-news-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ '  /  ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
              rows: 3,
              fill: 'row'
            },
        },
        576: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row'
            },
        },
        992: {
            slidesPerView: 3,
        },
    }
  });

  const articles = new Swiper('.swiper-articles', {
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-articles-next',
        prevEl: '.swiper-news-prev',
      },
      pagination: {
        el: '.swiper-articles-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ '  /  ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
              rows: 3,
              fill: 'row'
            },
        },
        576: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row'
            },
        },
        992: {
            slidesPerView: 3,
        },
    }
  });
