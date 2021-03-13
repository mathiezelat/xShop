const navSlide = ()=>{
    //Selector
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLinksA = document.querySelectorAll('.nav-links-li-a');
    //Toggle Nav
    nav.classList.toggle('nav-active');
    nav.classList.toggle('nav-active-mov');
    //Animate Links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
}

export default navSlide