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
let personaje
fetch("https://breakingbadapi.com/api/characters/"+id)
    .then(handleError)
    .then(transformarRespuesta)
    .then(response=>{
        personaje = response;
        personaje = personaje[0]
        console.log(personaje)
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        let main = document.querySelector("#main")
        main.innerHTML =
            "            <h1 class=\"font-breaking-bad-title\">"+personaje.name+"</h1>\n" +
            "            <div id='div'>\n" +
            "                <img  class=\"main-image\" src="+personaje.img+">\n"

        let div = document.querySelector("#div")
        div.insertAdjacentHTML("beforeend", "<ul id='ul_personaje'></ul>")
        let ul = document.querySelector("#ul_personaje")
        ul.insertAdjacentHTML("beforeend","<li>Fecha de nacimiento: "+personaje["birthday"]+"</li>")
        ul.insertAdjacentHTML("beforeend","<li>Alias: "+personaje["nickname"]+"</li>")
        ul.insertAdjacentHTML("beforeend","<li>Estado: "+personaje["status"]+"</li>")



    })