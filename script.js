const menu = document.querySelector('.menu i');
const menuList = document.querySelector('ul');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-xmark');
    menuList.classList.toggle('slide');
})

// home
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
});

rightArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
    slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
});



// testimonial

// const swipe = document.querySelector('.slider-3');
// const leftswipe = document.querySelector('.left3');
// const rightswipe = document.querySelector('.right3');

// var sectionIndex = 0;

// leftswipe.addEventListener('click', function(){
//     sectionIndex = (section > 0) ? sectionIndex - 1 : 0;
//     swipe.style.transform = 'translate(' + (sectionIndex) * -25 * '%)';
// });

// rightswipe.addEventListener('click', function(){
//     sectionIndex = (section < 3) ? sectionIndex + 1 : 3;
//     swipe.style.transform = 'translate(' + (sectionIndex) * -25 * '%)';
// });
var testimonials = document.getElementById("testimonials");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2");
var control3 = document.getElementById("control3");

control1.onclick=function(){
    testimonials.style.transform = "translateX(1225px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}
control2.onclick=function(){
    testimonials.style.transform = "translateX(0px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}
control3.onclick=function(){
    testimonials.style.transform = "translateX(-1225px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}