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
    }else if(!isNaN(nombreUsuario || !isNaN(apellidoUsuario) )){
        error.innerText = "No ingrese numeros en estos campos"
        verificador = true
    }else{}

    if(verificador == true){
        return;

    }


    // convertir en tipo number
    cantidadN = parseFloat(cantidadNinyos)
    cantidadA = parseFloat(cantidadAdultos)

    //Para que el usuario no coloque numeros negativos como visitante
    let error2 = document.querySelector('#issueCantidad')

    if(cantidadA <= 0 || NaN){
        error2.innerText = "Porfavor Ingrese valores numericos o positivos"
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


