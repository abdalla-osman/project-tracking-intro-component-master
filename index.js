let btn=document.querySelector('.menuHumbuer');
let nav=document.querySelector('.navmboile');
btn.addEventListener('click',()=>{
    if ( nav.className.includes('active')){
        btn.src="../images/icon-hamburger.svg"
    }
    else{
        btn.src="../images/icon-close.svg"
    
    }
    nav.classList.toggle('active')
   
})