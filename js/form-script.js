
/*----------Contador de letras introducidas en el compo del mensaje-----------*/
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
/*--------COmprobar que se ha escriot algo-------------*/
mensaje.addEventListener("focus",function(){

})
/*Salida del campo*/
mensaje.addEventListener("blur",function(){
    let target = event.target;
    let palabras =target.value.length;
    if(palabras==0){
        document.querySelector("#mensaje_error").hidden = false;
        document.querySelector("#mensaje_error").innerHTML = "Este campo no puede quedar vacio"
    }
    else{
        document.querySelector("#mensaje_error").hidden = true;
    }
})

/*---------------------------------------------------------------------------------*/
/* -------------------Validacion Formulario--------------------*/
/*--------Nombre-------------*/
/*Entrada del campo*/
nombre.addEventListener("focus",function(){
    document.querySelector("#nombre").className = "form-inputs"
})
/*Salida del campo*/
nombre.addEventListener("blur",function(blur){
    let valor = document.querySelector("#nombre").value;
    if(!valor){
        document.querySelector("#nombre_error").hidden = false;
        document.querySelector("#nombre_error").innerHTML = "Este campo no puede quedar vacio"
    }
    if(valor[0] != valor[0].toUpperCase()){
        document.querySelector("#nombre").className = "form-inputs-error"
        document.querySelector("#nombre_error").hidden = false;
        document.querySelector("#nombre_error").innerHTML = "El nombre debe de empezar con mayusculas"

    }else{
        document.querySelector("#nombre").className = "form-inputs"
        document.querySelector("#nombre_error").hidden = true;
    }
   

})
/*--------Apellidos-------------*/
apellidos.addEventListener("focus",function(){
    document.querySelector("#apellidos").className = "form-inputs"

})
/*Salida del campo*/
apellidos.addEventListener("blur",function(blur){
    let valor = document.querySelector("#apellidos").value
    if(!valor){
        document.querySelector("#apellidos_error").hidden = false;
        document.querySelector("#apellidos_error").innerHTML = "Este campo no puede quedar vacio"
    }
    if(valor[0] != valor[0].toUpperCase()){
        document.querySelector("#apellidos").className = "form-inputs-error"
        document.querySelector("#apellidos_error").hidden = false;
        document.querySelector("#apellidos_error").innerHTML = "El apellido debe de empezar con mayusculas"

    }else{
        document.querySelector("#apellidos").className = "form-inputs"
        document.querySelector("#apellidos_error").hidden = true;
    }

})
/*--------Email-------------*/
correo.addEventListener("focus",function(){
    document.querySelector("#correo").className = "form-inputs"

})
/*Salida del campo*/
correo.addEventListener("blur",function(blur){
    let valor = document.querySelector("#correo").value
    if(!valor){
        document.querySelector("#correo_error").hidden = false;
        document.querySelector("#correo_error").innerHTML = "Este campo no puede quedar vacio";
        return
    } 
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valor)){

        document.querySelector("#correo").className = "form-inputs-error"
        document.querySelector("#correo_error").hidden = false;
        document.querySelector("#correo_error").innerHTML = "El correo es incorrecto"
        return

    }else{
        document.querySelector("#correo").className = "form-inputs"
        document.querySelector("#correo_error").hidden = true;
    }

})
/*--------telefono-------------*/
telefono.addEventListener("focus",function(){
    document.querySelector("#telefono").className = "form-inputs"

})
/*Salida del campo*/
telefono.addEventListener("blur",function(blur){
    let valor = document.querySelector("#telefono").value
    if(!valor){
        document.querySelector("#telefono_error").hidden = false;
        document.querySelector("#telefono_error").innerHTML = "Este campo no puede quedar vacio";
        return
    } 
    if(valor.length!=9){
     
        document.querySelector("#telefono").className = "form-inputs-error"
        document.querySelector("#telefono_error").hidden = false;
        document.querySelector("#telefono_error").innerHTML = "El telefono tiene que tener 9 digitos"
        return

    }else{
        document.querySelector("#telefono").className = "form-inputs"
        document.querySelector("#telefono_error").hidden = true;
    }

})
/*--------Terminos-------------*/
terminos.addEventListener("focus",function(){

})
/*Salida del campo*/
terminos.addEventListener("blur",function(){

})


