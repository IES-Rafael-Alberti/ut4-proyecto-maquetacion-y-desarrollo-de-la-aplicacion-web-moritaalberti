
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
/*--------Comprobar contraseña-------------*/
contraseña2.addEventListener("focus",function(){
    document.querySelector("#contraseña2").className = "form-inputs"

})
/*Salida del campo*/
contraseña2.addEventListener("blur",function(blur){
    let contraseña2 = document.querySelector("#contraseña2").value
    let contraseña1 = document.querySelector("#contraseña").value
    if(!contraseña2){
        document.querySelector("#contraseña2_error").hidden = false;
        document.querySelector("#contraseña2_error").innerHTML = "Este campo no puede quedar vacio";
        return
    }
    if(contraseña2!=contraseña1){
        document.querySelector("#contraseña2").className = "form-inputs-error"
        document.querySelector("#contraseña2_error").hidden = false;
        document.querySelector("#contraseña2_error").innerHTML = "Las contraseñas no coinciden"
        return

    }else{
        document.querySelector("#contraseña2").className = "form-inputs"
        document.querySelector("#contraseña2_error").hidden = true;
    }

})
contraseña.addEventListener("focus",function(){
    document.querySelector("#contraseña").className = "form-inputs"

})
/*Salida del campo*/
contraseña.addEventListener("blur",function(blur){

    let contraseña1 = document.querySelector("#contraseña").value
    if(!contraseña1){
        document.querySelector("#contraseña_error").hidden = false;
        document.querySelector("#contraseña_error").innerHTML = "Este campo no puede quedar vacio";
        return
    }else {
        document.querySelector("#contraseña_error").hidden = true;
    }
})
ojo.addEventListener("click",function(click){
    let clas_i = document.querySelector("#ojo").className
    if(clas_i=="fas fa-eye"){
        document.querySelector("#contraseña").type = "text"
        document.querySelector("#ojo").className="fas fa-eye-slash";
    }else{
        document.querySelector("#ojo").className="fas fa-eye";
        document.querySelector("#contraseña").type = "password"
    }
})

ojo2.addEventListener("click",function(click){
    let clas_i = document.querySelector("#ojo2").className
    if(clas_i=="fas fa-eye"){
        document.querySelector("#contraseña2").type = "text"
        document.querySelector("#ojo2").className="fas fa-eye-slash";
    }else{
        document.querySelector("#ojo2").className="fas fa-eye";
        document.querySelector("#contraseña2").type = "password"
    }
})
