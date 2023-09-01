const nav = document.querySelector("#nav");
const open=document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener('click', ()=> {
    nav.classList.add('visible');
})

close.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})


let sections = document.querySelectorAll('section')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset=sec.offsetTop -100;
        let height =sec.offsetHeight;

        if(top >= offset && top < offset+height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }

    })
}