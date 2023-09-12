const myObserver = new IntersectionObserver((entradas) => {
    entradas.forEach( (i) => {
        if(i.isIntersecting){
            i.target.classList.add('show')
             
        }else {
            i.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden') 
elements.forEach((e) => myObserver.observe(e))



const observ =new IntersectionObserver((entries) => {
    entries.forEach((a) => {
        if(a.isIntersecting) {
            a.target.classList.add('animate')
        }else {
            a.target.classList.remove('animate')
        }

    })
})

const target =document.querySelectorAll(`[data-anime]`)
target.forEach((e) => observ.observe(e))



const hamburger = document.querySelector(".hamburguer") 
const iconMenu = document.querySelector(".hamburguer")
const nav = document.querySelector(".nav-list")



hamburger.addEventListener("click", () =>
nav.classList.toggle("active"));
hamburger.addEventListener("click", () =>
iconMenu.classList.toggle("hamburguer-active"));

nav.addEventListener("click", () => 
nav.classList.remove("active"));
nav.addEventListener("click", () => 
iconMenu.classList.remove("hamburguer-active"));
