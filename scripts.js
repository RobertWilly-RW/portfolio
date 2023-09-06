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

