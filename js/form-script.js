
let mensaje = document.querySelector("#mensaje");
let lugar = document.querySelector("#contador_mensaje");
mensaje.addEventListener("input",function (event){
    let target = event.target;
    let longitudMax = target.getAttribute('maxlength');
    let longitudAct = target.value.length;
    lugar.innerHTML =`${longitudAct}/${longitudMax}`;
    if (longitudAct  == 500){
        lugar.style.color = "red";
    }else {
        lugar.style.color = "#d9d9d9";

    }
})
