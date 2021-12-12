let logo = document.querySelector(".header-li")
let snow = document.querySelector(".snow-gif");

logo.addEventListener("mouseover",function (){
    let logo_fotor = document.querySelector(".header-li--logo");
    logo_fotor.src="images/logo-snow.gif"
    setTimeout(function (){
        logo_fotor.src="images/logo_breaking_bad.png"
    },1500)
})

$("nav> li> a").on("click",function (event){
    event.preventDefault()
    let url = $(this).attr("href")
    window.history.pushState("object","url change",url)
    loadPage(url)
})
const loadPage = pageName =>{
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", pageName)
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let resultados = this.responseText
            console.log(resultados)
            document.querySelector(".main").innerHTML = resultados
        }
    }
    }



