// TF Diez Juan

// JS de FORMULARIO DE REGISTRO-------------------
$('#boton').click(function() { //Validaciones al hacer click en boton

  $(document).ready(function() {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var edad = $("#edad").val();
    var email = $("#email").val();
    var nombreUsuario = $("#nombreUsuario").val();
    var contrasenia = $("#contrasenia").val();
    var rcontrasenia = $("#rcontrasenia").val();

    
    if( nombre==="" || apellido==="" || edad==="" || email==="" || nombreUsuario==="" || contrasenia==="" || rcontrasenia===""){ //Verificacion de vacios
      alert("Por favor complete los campos obligatorios (*)");
        }else if(edad<18){ //verificacion de edad
          alert("Usted es menor de edad, no puede continuar con el registro");
            }else if(edad>100){
              alert("Por favor ingresar una edad válida");
                }else if(contrasenia!==rcontrasenia){ //verificacion coincidencia de contraseñas
                  alert("Las constraseñas propuestas no coinciden");
                    }else {
                      localStorage.setItem("nombreUsuario",nombreUsuario);
                      localStorage.setItem("contrasenia",contrasenia);                  
                      alert("USTED SE REGISTRÓ EXITOSAMENTE!") //Registro OK
                      }
  });

});


$('#botonMenu').click(function() {  //Validacion boton para volver al menu
  window.location.href = "TF-DiezJuan-Menu.html";
});


$(document).ready(function() {
    
  //Select llamando a la api de paises del mundo
    $.ajax({
      url: "https://restcountries.com/v2/all",
      type: "GET",

      success: function(data) {
        var paises = data;
  
        for (var i = 0; i < paises.length; i++) {
          var paisesName = paises[i].name;
          $("#selectPaises").append("<option value='" + paisesName + "'>" + paisesName + "</option>");
        }
      },

      error: function() {
        console.log("Error al obtener los datos de paises")
    }

    });
});



$(document).ready(function() {

  //Select llamando a las provincias de ARG
    $.ajax({
      url: "https://apis.datos.gob.ar/georef/api/provincias",
      type: "GET",

      success: function(data) {
        var provincias = data.provincias;
  
        for (var i = 0; i < provincias.length; i++) {
          var provinciasName = provincias[i].nombre;
          $("#selectProvincias").append("<option value='" + provinciasName + "'>" + provinciasName + "</option>");
        }
      },

      error: function() {
        console.log("Error al obtener los datos de provincias")
    }

    });
});



$(document).ready(function() {

  //Select llamando a las ciudades de La Pampa
    $.ajax({
      url: "https://apis.datos.gob.ar/georef/api/municipios?provincia=42&campos=id,nombre&max=100",
      type: "GET",

      success: function(data) {
        var municipios = data.municipios;
  
        for (var i = 0; i < municipios.length; i++) {
          var municipiosName = municipios[i].nombre;
          $("#selectCiudades").append("<option value='" + municipiosName + "'>" + municipiosName + "</option>");
        }
      },

      error: function() {
        console.log("Error al obtener los datos de ciudades")
    }

    });
});




// JS de JUEGO DE ADIVINANZAS-------------------

//INICIO DE SESION EN ADIVINANZAS1
$('#botonLogin').click(function() { //Validaciones al hacer click en boton
  $(document).ready(function(){

      //Obtengo los valores ingresados
      var nombreUsuario = $("#nombreUsuario").val();
      var contrasenia = $("#contrasenia").val();

      //Obtengo los valores registrados con LocalStorage
      var nombreUsuarioRegistrado = localStorage.getItem("nombreUsuario");
      var contraseniaRegristrada = localStorage.getItem("contrasenia");

      if(nombreUsuario === nombreUsuarioRegistrado && contrasenia === contraseniaRegristrada){
        alert("Usted inicio sesion exitosamente!");
        window.location.href = "TF-DiezJuan-Adivinanzas2.html"; //Redirige al juego (ADIVINANZAS2)
      }   else {
        alert("Nombre de usuario o constraseña incorrectos");
      }

  });
});



//ARCHIVO ADIVINANZAS 2
$(document).ready(function() {


  //ADIVINANZA 1
  var intentos1 = 0;
  var puntuacion1 = 10;

  $('#check1').click(function() {
    
    var opSeleccionada1 = $("input[name='opcion1']:checked").val();  //Toma el valor del radio seleccionado


    if(opSeleccionada1){

      if(opSeleccionada1 === "PARANÁ"){
        alert("CORRECTO");
        if(intentos1 === 0){
        alert("Su puntuacion es: " + puntuacion1 + ". Continue con la siguiente adivinanza");
        } else if(intentos1 === 1){
        puntuacion1=5;
        alert("Su puntuacion es: " + puntuacion1 + ". Continue con la siguiente adivinanza");
        } else {
        puntuacion1=0;
        alert("Su puntuacion es: " + puntuacion1 + ". Continue con la siguiente adivinanza");
        }

      } else {
      alert("INCORRECTO")
      }

      intentos1++;

    } else{
    alert("Seleccione una opcion antes de presionar CHECK")
    }

  });


  //ADIVINANZA 2
  var intentos2 = 0;
  var puntuacion2 = 10;

  $('#check2').click(function() {
    
    var opSeleccionada2 = $("input[name='opcion2']:checked").val();  //Toma el valor del radio seleccionado


    if(opSeleccionada2){

      if(opSeleccionada2 === "ÑANDÚ"){
        alert("CORRECTO");
        if(intentos2 === 0){
        alert("Su puntuacion es: " + puntuacion2 + ". Continue con la siguiente adivinanza");
        } else if(intentos2 === 1){
        puntuacion2=5;
        alert("Su puntuacion es: " + puntuacion2 + ". Continue con la siguiente adivinanza");
        } else {
        puntuacion2=0;
        alert("Su puntuacion es: " + puntuacion2 + ". Continue con la siguiente adivinanza");
        }

      } else {
      alert("INCORRECTO")
      }

      intentos2++;

    } else{
    alert("Seleccione una opcion antes de presionar CHECK")
    }

  });



  //ADIVINANZA 3
  var intentos3 = 0;
  var puntuacion3 = 10;

  $('#check3').click(function() {
    
    var opSeleccionada3 = $("input[name='opcion3']:checked").val();  //Toma el valor del radio seleccionado


    if(opSeleccionada3){

      if(opSeleccionada3 === "CAFÉ"){
        alert("CORRECTO");
        if(intentos3 === 0){
        alert("Su puntuacion es: " + puntuacion3 + ". Continue con la siguiente adivinanza");
        } else if(intentos3 === 1){
        puntuacion3=5;
        alert("Su puntuacion es: " + puntuacion3 + ". Continue con la siguiente adivinanza");
        } else {
        puntuacion3=0;
        alert("Su puntuacion es: " + puntuacion3 + ". Continue con la siguiente adivinanza");
        }

      } else {
      alert("INCORRECTO")
      }

      intentos3++;

    } else{
    alert("Seleccione una opcion antes de presionar CHECK")
    }

  });


  //RESULTADO
  $('#resultado').click(function() { 

    var resultado = puntuacion1 + puntuacion2 + puntuacion3;
    $('#res').text("La puntuacion final es: " + resultado);
  });


});


