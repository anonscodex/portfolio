const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
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