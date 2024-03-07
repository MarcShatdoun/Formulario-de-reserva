function reservar(){
    
    
    let nombreUsuario = document.querySelector('#name').value;
    let apellidoUsuario = document.querySelector('#lastN').value;
    
    let cantidadNinyos = document.getElementById("Niños").value;
    let cantidadAdultos = document.getElementById("Adultos").value;
    let regimesComida = document.getElementsByName("comidas")
    
    //Indicar al usuario que es requrido completar los campos

    let error = document.getElementById("issue")
    error.innerHTML = ""
    let verificador = false

    if (nombreUsuario === "" || apellidoUsuario === "") {
        error.innerText = "Complete todos los campos, por favor.";
        verificador = true
    }else if(!isNaN(nombreUsuario || !isNaN(apellidoUsuario))){
        error.innerText = "No ingrese numeros en estos campos"
        verificador = true
    }else{}

    if(verificador == true){
        return;

    }




    //Para que el usuario no coloque numeros negativos como visitante
    let error2 = document.querySelector('#issueCantidad')

    if(cantidadAdultos <= 0){
        error2.innerText = "Porfavor Ingrese numeros enteros"
        verificador = true;
    } else if (cantidadNinyos === "" || cantidadAdultos === ""){  //Segun yo, cuando se trata de verificar si un campo esta vacio o hay letras es mejor usar la declaracion del input cuando aun es texto, si utilizamos el valor ya transformado en number no funcionara, en el caso anterior funciono porque estabamos usando tambien
        error2.innerText = "Rellene los campos"
        verificador = true;
    } else if(isNaN(cantidadAdultos) && isNaN(cantidadNinyos)){ //cantidadA != NaN
        error2.innerText = "Solo agregue la cantidad (numeros) de visitantes"
        verificador = true;
    }else if(cantidadAdultos > 4 || cantidadNinyos > 3 ){
        error2.innerText = "Capacidad maxima! (Adultos 4 y niños 3), porfavor reserve otra"
        verificador = true;
    }
    if(verificador == true){
        return;
    }




    //Indicar cual checkbox esta marcada

    let seleccion = ""

    for(i = 0; i < regimesComida.length; i++){
        if(regimesComida[i].checked == true){
            seleccion = regimesComida[i].value;
        }
    }   
        alert(`
        
        Bienvenido ${nombreUsuario} ${apellidoUsuario}
        Tiene una reserva de ${cantidadAdultos} adulto(s)
        Tiene una reserva de ${cantidadNinyos} niño(s)
        
        y su regimen de comida es: ${seleccion}

        
        `)
}


