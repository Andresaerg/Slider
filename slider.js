const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

function Back(){
    let sliderSection = document.querySelectorAll(".slider_Section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Back();
    setTimeout(3000);
});

setInterval(function(){
    Next();
}, 5000);

/////////////////////////////////////////////////////////// BULLETS! ///////////////////////////////////////////////////////////////////////////////

/*
const btnB1 = document.querySelector("#btnB1");
const btnB2 = document.querySelector("#btnB2");
const btnB3 = document.querySelector("#btnB3");
const btnB4 = document.querySelector("#btnB4");

function selectBullet1(){
    if (slider.style.margin = "-200%") {
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    }
}

btnB1.addEventListener('click', function(){
    selectBullet1();
});

function selectBullet2(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[1];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
        slider.style.marginLeft = "-200%";
    }, 500);
}

btnB2.addEventListener('click', function(){
    selectBullet2();
});

function selectBullet3(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[2];
    slider.style.marginLeft = "-300%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
        slider.style.marginLeft = "-300%";
    }, 500);
}

btnB3.addEventListener('click', function(){
    selectBullet3();
});

function selectBullet4(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[3];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnB4.addEventListener('click', function(){
    selectBullet4();
});

*/