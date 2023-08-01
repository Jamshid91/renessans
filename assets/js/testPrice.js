const testPriceCard = document.querySelectorAll('.testPrice-card'),
      checkBox = document.querySelectorAll('.check-box'),
      slides = document.querySelectorAll('.slides'),
      slideKitchen = document.querySelector('.kitchen-slide'),
      kitchenCheck = document.querySelectorAll('.kitchenCHeck'),
      slideKloset = document.querySelector('.kloset-slide'),
      klosetCheck = document.querySelectorAll('.klosetCheck'),
      slideLivingRoom = document.querySelector('.livingRoom-slide'),
      livingRoomCheck = document.querySelectorAll('.livingRoomCheck'),
      slideHallway = document.querySelector('.hallway-slide'),
      hallwayCheck = document.querySelectorAll('.hallwayCheck')



testPriceCard.forEach(card => {
    card.addEventListener('click', () => {
        testPriceCard.forEach(elem => {
            elem.classList.remove('activeCard')
        })
        card.classList.add('activeCard')
    })
});

checkBox.forEach(check => {
    check.addEventListener('click', () => {
        checkBox.forEach(mat => {
            mat.classList.remove('active-check')
        })
        check.classList.add('active-check')
    })
});


klosetCheck.forEach(kloset => {
    kloset.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.add('d-none')
        });
        slideKloset.classList.remove('d-none');
    });
});

kitchenCheck.forEach(kitchen => {
    kitchen.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.add('d-none')
        });
        slideKitchen.classList.remove('d-none');
    });
});

livingRoomCheck.forEach(kitchen => {
    kitchen.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.add('d-none')
        });
        slideLivingRoom.classList.remove('d-none');
    });
});

hallwayCheck.forEach(hallway => {
    hallway.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.add('d-none')
        });
        slideHallway.classList.remove('d-none');
    });
});



// Kitchen Slides
let buttons = document.querySelectorAll(".kitchen-slide .testPrice-box-btns button");
let [right, left] = buttons
let kitchen = document.querySelectorAll(".kitchen-slide .slide");
let i = 0;

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);



function moveLeft() {
    if (i == kitchen.length - 1) {
       
    } else {
        kitchen[i].classList.add('d-none');
        kitchen[i + 1].classList.remove('d-none');
        i++
    }
    right.classList.remove('d-none');

    if(i == 6) {
        left.classList.add('d-none');
    } 

}

function moveRight() {
    if (i == 0) {
        right.classList.add('d-none')
    } else {
        kitchen[i].classList.add('d-none');
        kitchen[i - 1].classList.remove('d-none');
        i--;
    }
    left.classList.remove('d-none');
    if(i == 0) {
        right.classList.add('d-none');
    }
}


// Kitchen Slides
let klosetButtons = document.querySelectorAll(".kloset-slide .testPrice-box-btns button");
let [klosetRight, klosetLeft] = klosetButtons;
let kloset = document.querySelectorAll(".kloset-slide .slide");
let k = 0;

klosetLeft.addEventListener("click", moveLeftKloset);
klosetRight.addEventListener("click", moveRightKloset);



function moveLeftKloset() {
    if (k == kloset.length - 1) {
       
    } else {
        kloset[k].classList.add('d-none');
        kloset[k + 1].classList.remove('d-none');
        k++
    }
    klosetRight.classList.remove('d-none');

    if(k == 6) {
        klosetLeft.classList.add('d-none');
    } 

}

function moveRightKloset() {
    if (k == 0) {
        klosetRight.classList.add('d-none')
    } else {
        kloset[k].classList.add('d-none');
        kloset[k - 1].classList.remove('d-none');
        k--;
    }
    klosetLeft.classList.remove('d-none');
    if(k == 0) {
        klosetRight.classList.add('d-none');
    }
}


// livingRoom Slides
let livingRoomButtons = document.querySelectorAll(".livingRoom-slide .testPrice-box-btns button");
let [livingRoomRight, livingRoomLeft] = livingRoomButtons;
let livingRoom = document.querySelectorAll(".livingRoom-slide .slide");
let l = 0;

livingRoomLeft.addEventListener("click", moveLeftLivingRoom);
livingRoomRight.addEventListener("click", moveRightLivingRoom);



function moveLeftLivingRoom() {
    if (l == livingRoom.length - 1) {
       
    } else {
        livingRoom[l].classList.add('d-none');
        livingRoom[l + 1].classList.remove('d-none');
        l++
    }
    livingRoomRight.classList.remove('d-none');

    if(l == 6) {
        livingRoomLeft.classList.add('d-none');
    } 

}

function moveRightLivingRoom() {
    if (l == 0) {
        livingRoomRight.classList.add('d-none')
    } else {
        livingRoom[l].classList.add('d-none');
        livingRoom[l - 1].classList.remove('d-none');
        l--;
    }
    livingRoomLeft.classList.remove('d-none');
    if(l == 0) {
        livingRoomRight.classList.add('d-none');
    }
}

// livingRoom Slides
let hallwayButtons = document.querySelectorAll(".hallway-slide .testPrice-box-btns button");
let [hallwayRight, hallwayLeft] = hallwayButtons;
let hallway = document.querySelectorAll(".hallway-slide .slide");
let j = 0;

hallwayLeft.addEventListener("click", moveLeftHallway);
hallwayRight.addEventListener("click", moveRightHallway);



function moveLeftHallway() {
    if (j == hallway.length - 1) {
       
    } else {
        hallway[j].classList.add('d-none');
        hallway[j + 1].classList.remove('d-none');
        j++
    }
    hallwayRight.classList.remove('d-none');

    if(j == 6) {
        hallwayLeft.classList.add('d-none');
    } 

}

function moveRightHallway() {
    if (j == 0) {
        hallwayRight.classList.add('d-none')
    } else {
        hallway[j].classList.add('d-none');
        hallway[j - 1].classList.remove('d-none');
        j--;
    }
    hallwayLeft.classList.remove('d-none');
    if(j == 0) {
        hallwayRight.classList.add('d-none');
    }
}