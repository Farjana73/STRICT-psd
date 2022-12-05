
let nav  = document.querySelector("#navbar")
let  back_to_top = document.querySelector(".back_to_top")



window.addEventListener("scroll",function() {
    let scroll_value= window.scrollY;
    if (scroll_value > 150) {
        nav.classList.add("sticky")
        back_to_top.classList.add("show")
        
    }
    else{
        nav.classList.remove("sticky")
        back_to_top.classList.remove("show")

    }
})