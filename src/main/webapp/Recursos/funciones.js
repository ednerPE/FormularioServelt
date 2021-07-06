function validarForm(forma){
     var usuario = forma.usuario;
     if(usuario.value == "" || usuario.value == "Escriba un usuario"){
         alert("Debe proporcionar un nombre de usuario");
         usuario.focus();
         usuario.select();
         return false;
         
     }
    
    var password = forma.password
    if(password.value == "" || password.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    var tecnologia = forma.tecnologia;
    var checkSeleccionado = false;
    
    
    for(var i = 0; i < tecnologia.length; i++){
        if(tecnologia[i].checked){
            checkSeleccionado = true;
        }
        
    }
    
    if(!checkSeleccionado){
        alert("Debe seleccionar una tecnologia por lo menos");
        return false;
    }
    
    var genero = forma.genero;
    var radioSelecionado = false;
    
    for(var i =0; i < genero.length; i++){
        if(genero[i].checked){
            radioSelecionado = true;
        }
    }
    
    
    if(!radioSelecionado){
        alert("debe seleccionar un genero");
        return false;
    }
    
    var ocupacion = form.ocupacion;
    if(ocupacion.vaue == ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
   //formulario es valida 
   alert("Formulario valido enviado datos al servidor");
   return true;
   
}

