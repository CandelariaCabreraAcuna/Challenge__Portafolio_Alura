var typed = new Typed (".text",{
    strings:['Frontend Developer', 'Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


let navWrapper = document.querySelector('.nav-wrapper'),
navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})

