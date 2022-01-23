"use strict";
const handleError = response => {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response;
    }
}

const transformarRespuesta = response => response.json();


var personajes
fetch("https://breakingbadapi.com/api/characters")
    .then(handleError)
    .then(transformarRespuesta)
    .then(response=>{
        personajes = response;
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        let numPagina =1;
        let section = document.querySelector('#personajes')
        section.insertAdjacentHTML("afterend"," <ul id='paginado' class='paginado-ul'></ul>")
        let numPaginas=personajes.length/9
        if(parseInt(numPaginas)<numPaginas){
            numPaginas=parseInt(numPaginas)+1
        }
        else {
            numPaginas=parseInt(numPaginas)
        }
        let paginado = document.querySelector("#paginado")

        paginado.addEventListener("click",function (e){
            numPagina= e.target.text
            parseInt(numPagina)
            imprimir(numPagina)
            imprimirpaginado(numPagina)
        })
        imprimir(1)
        function imprimir(numPagina){
            section.innerHTML  = ""
            let numfinal = numPagina*9-1
            let numincicial = numfinal-8
            console.log(numfinal)
            console.log(numincicial)
            for (let i=0; i<personajes.length ; i++){
                if(i<=numfinal && i>=numincicial){
                    section.insertAdjacentHTML("beforeend",
                        "<div class=\"main-personaje-div\">\n" +
                        "<a href=\"presentacion-personaje.html?id="+personajes[i].char_id+"\">\n" +
                        "<img class=\"pesonaje-foto\" src="+personajes[i].img+">\n" +
                        "</a>\n" +
                        "<div  class=\"title-personajes\"> "+ personajes[i].name +"</div>\n" +
                        "</div>")
                }

        }
            paginado.innerHTML = ""
            for (let i = 1;i<numPaginas;i++){
                if(i==numPagina){
                    paginado.insertAdjacentHTML("beforeend","<li class='paginado-li'><a href='#' style='color: red;'>"+i+"</a></li>")
                }
                else{
                    paginado.insertAdjacentHTML("beforeend","<li class='paginado-li'><a href='#'>"+i+"</a></li>")
                }
            }

        }


    })
