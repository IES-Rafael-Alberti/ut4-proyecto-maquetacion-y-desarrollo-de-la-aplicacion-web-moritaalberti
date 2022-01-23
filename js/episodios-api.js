"use strict";
const handleError = response => {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response;
    }
}

const transformarRespuesta = response => response.json();


let episodios
fetch("https://breakingbadapi.com/api/episodes")
    .then(handleError)
    .then(transformarRespuesta)
    .then(response=>{
        episodios = response;
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        let select = document.querySelector("#select")
        let section = document.querySelector('#episodios')
        console.log(episodios)
        let temporada= select.value
            function imprimir(temporada){
            let count = 1
            for (let i=0 ; i<episodios.length ; i++){
                if(episodios[i].season == temporada && episodios[i].series == "Breaking Bad"){
                    section.insertAdjacentHTML("beforeend",
                        " <div class='main-episodio-div'>"+
                        "  <a href='presentacion-episodio.html?id="+episodios[i].episode_id+"'><img class='main-episodio-image' src='images/"+count+"x"+temporada+".jpg'></a>"+
                        "<div class='title-episodio'>"+episodios[i].title+"</div>")
                    count+=1
                }
            }
        }

        select.addEventListener("change",function (e){
            section.innerHTML = ""
            imprimir(e.currentTarget.value)
        })
        imprimir(temporada)
    })
