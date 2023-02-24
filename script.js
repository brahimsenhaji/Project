let menu = document.querySelector('.fa-bars');
menu.addEventListener('click',()=>{
    let Slide = document.querySelector('.Slide');
    Slide.classList.toggle('Slideing');

    menu.classList.toggle('fa-xmark')
})



window.onscroll = ()=>{
    let video5 = document.querySelector('.video5');
    if(window.scrollY < 950){
        video5.style.display = "none";
    }
    else{
        video5.style.display ="block";
    }
}
