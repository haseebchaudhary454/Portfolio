const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer.', 'Freelancer.' , 'UX/UI Designer.'],
    typespeed: 10,
    backspeed: 10,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    // reset:'true',
    distance:'80px',
    duration: 1000 ,
    delay: 200
});

ScrollReveal().reveal('.header-text , .sub-title', { origin: 'top' });
ScrollReveal().reveal('.about-col-1 img , .Services-list , .work img , .row form', { origin: 'bottom' });
ScrollReveal().reveal('.header-text h1 , .about-col-1 img', { origin: 'left' });
ScrollReveal().reveal('.row p', { origin: 'right' });


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");

}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab")
}
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}