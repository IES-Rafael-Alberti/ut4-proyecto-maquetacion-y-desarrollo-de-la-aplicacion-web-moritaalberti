let boton = document.querySelector("#switch")
let titulo =window.location.pathname.split("/").pop().split(".")[0]
let css = document.querySelector("#css")
boton.addEventListener("click",function (){

    if(boton.data=="oscuro"){
        boton.data="claro"
        if(titulo=="index"){
            css.href = "css/style-oscuro.css"
            return;
        }
        boton.innerHTML="Modo Oscuro"
        css.href = "css/style-"+titulo+"-oscuro.css"
    }
    else{
        boton.data="oscuro"
        if(titulo=="index"){
            css.href = "css/style.css"
            return
        }
        boton.innerHTML="Modo Claro"
        css.href = "css/style-"+titulo+".css"
    }
})