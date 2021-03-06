
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
/*--------Comprobar contrase??a-------------*/
contrase??a2.addEventListener("focus",function(){
    document.querySelector("#contrase??a2").className = "form-inputs"

})
/*Salida del campo*/
contrase??a2.addEventListener("blur",function(blur){
    let contrase??a2 = document.querySelector("#contrase??a2").value
    let contrase??a1 = document.querySelector("#contrase??a").value
    if(!contrase??a2){
        document.querySelector("#contrase??a2_error").hidden = false;
        document.querySelector("#contrase??a2_error").innerHTML = "Este campo no puede quedar vacio";
        return
    }
    if(contrase??a2!=contrase??a1){
        document.querySelector("#contrase??a2").className = "form-inputs-error"
        document.querySelector("#contrase??a2_error").hidden = false;
        document.querySelector("#contrase??a2_error").innerHTML = "Las contrase??as no coinciden"
        return

    }else{
        document.querySelector("#contrase??a2").className = "form-inputs"
        document.querySelector("#contrase??a2_error").hidden = true;
    }

})
contrase??a.addEventListener("focus",function(){
    document.querySelector("#contrase??a").className = "form-inputs"

})
/*Salida del campo*/
contrase??a.addEventListener("blur",function(blur){

    let contrase??a1 = document.querySelector("#contrase??a").value
    if(!contrase??a1){
        document.querySelector("#contrase??a_error").hidden = false;
        document.querySelector("#contrase??a_error").innerHTML = "Este campo no puede quedar vacio";
        return
    }else {
        document.querySelector("#contrase??a_error").hidden = true;
    }
})
ojo.addEventListener("click",function(click){
    let clas_i = document.querySelector("#ojo").className
    if(clas_i=="fas fa-eye"){
        document.querySelector("#contrase??a").type = "text"
        document.querySelector("#ojo").className="fas fa-eye-slash";
    }else{
        document.querySelector("#ojo").className="fas fa-eye";
        document.querySelector("#contrase??a").type = "password"
    }
})

ojo2.addEventListener("click",function(click){
    let clas_i = document.querySelector("#ojo2").className
    if(clas_i=="fas fa-eye"){
        document.querySelector("#contrase??a2").type = "text"
        document.querySelector("#ojo2").className="fas fa-eye-slash";
    }else{
        document.querySelector("#ojo2").className="fas fa-eye";
        document.querySelector("#contrase??a2").type = "password"
    }
})
