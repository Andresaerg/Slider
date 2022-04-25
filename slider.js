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