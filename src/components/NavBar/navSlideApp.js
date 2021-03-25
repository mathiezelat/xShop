const navSlide = ()=>{
    //Selector
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    nav.classList.toggle('nav-active');
    nav.classList.toggle('nav-active-mov');
    //Animate Links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('active')){
            nav.classList.remove('nav-active');
            nav.classList.remove('nav-active-mov');
            navLinks.forEach((link)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
            });
            burger.classList.remove('toggle');
        }
    } )
}

export default navSlide