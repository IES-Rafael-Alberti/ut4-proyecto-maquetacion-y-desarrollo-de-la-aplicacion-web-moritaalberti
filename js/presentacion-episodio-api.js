"use strict";
const handleError = response => {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response;
    }
}

const transformarRespuesta = response => response.json();

let id = window.location.search.split("=")[1]
let episodio
fetch("https://breakingbadapi.com/api/episodes/"+id)
    .then(handleError)
    .then(transformarRespuesta)
    .then(response=>{
        episodio = response;
        episodio = episodio[0]
        console.log(episodio)
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        let main = document.querySelector("#main")
        main.innerHTML = "  <div>\n" +
            "            <img  class=\"main-image\" src=\"images/"+episodio["episode"]+"x"+episodio["season"]+".jpg\">\n" +
            "            </div>\n" +
            "            <h3 class=\"main-description-h3\">Temporada "+episodio["season"]+", Episodio "+episodio["episode"]+"</h3>\n"
    })