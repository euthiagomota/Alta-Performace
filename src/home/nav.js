//Nav
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagen', window.scrollY > 100)
})
    