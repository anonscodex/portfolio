const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});




const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


let typed = new Typed('.element', {
    strings: ['  ', 'Yusuf Abdullah Ayomide', 'a Frontend Developer', 'a Graphic Designer'],
    smartBackspace: true ,// Default value
    typeSpeed:70,
    backSpeed:40,
    startDelay:700,
    backDelay: 700,
    loop: true,
  loopCount: Infinity

  });

const burgers = document.querySelector(".burgers")
const burgermenu = document.querySelector(".burgermenu")
const menu = document.querySelector(".menu") 
const morebtn = document.querySelector(".morebtn")
const more = document.querySelectorAll('.more')

burgers.addEventListener('click', ()=> {
    

        if(burgermenu.style.display === "none"){
            burgermenu.style.display = "block";
            
        }else{
            burgermenu.style.display = "none";
            
        }
})

menu.addEventListener('click', ()=> {
    burgermenu.style.display = "none"
})

const showmore = ()=> {
    more;
    more.forEach(mor => {
        mor.style.display = (mor.style.display === 'block') ? 'none'  : 'block' ;
        //morebtn.innerHTML === 'More Project' ? morebtn.innerHTML = 'Less Projects': morebtn.innerHTML = 'Less Projects';
    });
}

morebtn.addEventListener('click', showmore);

morebtn.addEventListener('click', ()=> {
    if(morebtn.innerHTML === 'More Projects'){
        morebtn.innerHTML = "Less Projects"
    }else{
        morebtn.innerHTML = "More Projects"
    }
});
  