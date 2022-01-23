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
