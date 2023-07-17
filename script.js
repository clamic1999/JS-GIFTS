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
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});

rightArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});



// testimonial

const slider3 = document.querySelector('.slider-3');
const leftArrow1 = document.querySelector('.left3');
const rightArrow1 = document.querySelector('.right3');

var sectionIndex1 = 0;

leftArrow1.addEventListener('click', function(){
    sectionIndex1 = (section > 0) ? sectionIndex1 - 1 : 0;
    slider3.style.transform = 'translate(' + (sectionIndex1) * -25 * '%)';
});

rightArrow1.addEventListener('click', function(){
    sectionIndex1 = (section < 3) ? sectionIndex1 + 1 : 3;
    slider3.style.transform = 'translate(' + (sectionIndex1) * -25 * '%)';
});
// var testimonials = document.getElementById("testimonials");
// var control1 = document.getElementById("control1");
// var control2 = document.getElementById("control2");
// var control3 = document.getElementById("control3");

// control1.onclick=function(){
//     testimonials.style.transform = "translateX(1340px)";
//     control1.classList.add("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
// }
// control2.onclick=function(){
//     testimonials.style.transform = "translateX(0px)";
//     control1.classList.add("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
// }
// control3.onclick=function(){
//     testimonials.style.transform = "translateX(-1340px)";
//     control1.classList.add("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
// }