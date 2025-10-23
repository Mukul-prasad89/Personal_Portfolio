const hamberger=document.querySelector(".checkbox");
const navMenu = document.querySelector("nav ul");

hamberger.addEventListener('click',(e)=>{
    e.preventDefault();
    navMenu.classList.toggle("active");
    
})

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    
    const icon = hamburger.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

const linkedIn=document.querySelector('#linkedIn');
const github=document.querySelector('#github');
const insta=document.querySelector('#insta');

const email=document.querySelector('#email');

linkedIn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open("https://www.linkedin.com/in/mukul-prasad-0917122a6", "_blank");
})
github.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open("https://github.com/Mukul-prasad89", "_blank");
})
insta.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open("https://www.instagram.com/__main__mukul__?igsh=MXhubmVoc3I0NXZodg==", "_blank");
})

email.addEventListener('click',(e)=>{
    e.preventDefault();
        window.location.href = "mailto:mukulprasad89@gmail.com?subject=Hello%20Mukul&body=Hi%20Mukul,";
})
