let logo = document.querySelector(".header-li")
let snow = document.querySelector(".snow-gif");

logo.addEventListener("mouseover",function (){
    let logo_fotor = document.querySelector(".header-li--logo");
    logo_fotor.src="images/logo-snow.gif"
    setTimeout(function (){
        logo_fotor.src="images/logo_breaking_bad.png"
    },1500)
})