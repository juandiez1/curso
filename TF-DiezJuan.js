// TF Diez Juan

// JS de FORMULARIO DE REGISTRO-------------------
$(document).ready(function() {
 $('#formulario').submit(function(event){
  event.preventDefault();

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var edad = $("#edad").val();
    var email = $("#email").val();
    var nombreUsuario = $("#nombreUsuario").val();
    var contrasenia = $("#contrasenia").val();
    var rcontrasenia = $("#rcontrasenia").val();

    // Validar campos completos
    if (nombre === '' || apellido === '' || edad === '' || email === '' || nombreUsuario === '' || contrasenia === '' || rcontrasenia === '') {
      Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
      return;
    }
  
    // Validar la edad
    if (edad < 18 || edad > 100) {
      Swal.fire('Error', 'La edad debe estar entre 18 y 100 años.', 'error');
      return;
    }
  
    // Validar el formato del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Error', 'Ingrese un email válido.', 'error');
      return;
    }
  
    // Validar repeticion de contraseña
    if (contrasenia !== rcontrasenia) {
      Swal.fire('Error', 'La contraseñas ingresadas no coinciden', 'error');
      return;
    }
  
  
    //Guarda los datos de inicio de sesion en localstorage
    localStorage.setItem("nombreUsuario",nombreUsuario);
    localStorage.setItem("contrasenia",contrasenia);
  
    // Limpiar los campos del formulario
    $('#formulario')[0].reset();
  
    // Mostrar mensaje de éxito
    Swal.fire({
    title: 'Registro exitoso',
    text: 'Los datos de registro se han guardado exitosamente.',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Volver a Inicio',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'TF-DiezJuan-Menu.html';
      }
    });

  });
});


//Validacion boton para volver a inicio
$('#botonMenu').click(function() {  
  window.location.href = "TF-DiezJuan-Menu.html";
});


//Select llamando a la api de paises del mundo
$(document).ready(function() {
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


//Select llamando a las provincias de ARG
$(document).ready(function() {
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


//Select llamando a las ciudades de La Pampa
$(document).ready(function() {
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
$(document).ready(function() {
  $('#formularioLogin').submit(function(event) {
    event.preventDefault();

    //Obtengo los valores ingresados
    var nombreUsuario = $("#nombreUsuario").val();
    var contrasenia = $("#contrasenia").val();

    //Obtengo los valores registrados con LocalStorage
    var nombreUsuarioRegistrado = localStorage.getItem("nombreUsuario");
    var contraseniaRegristrada = localStorage.getItem("contrasenia");

    if(nombreUsuario === nombreUsuarioRegistrado && contrasenia === contraseniaRegristrada){
      // Mostrar mensaje de éxito
      Swal.fire({
      title: 'Inicio de sesion exitoso',
      text: 'Será redirigido al juego de adivinanzas',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'JUGAR',
      }).then((result) => {
      if (result.isConfirmed) {
      window.location.href = 'TF-DiezJuan-Adivinanzas2.html';
      }
      });

    }else {
      Swal.fire('Error', 'Usuario o contraseña incorrectos.', 'error');
      return;
    }

  });
});

//Validacion boton para volver a formulario de registro
$('#registro').click(function() {  
  window.location.href = "TF-DiezJuan-Formulario.html";
});



//ARCHIVO ADIVINANZAS 2
$(document).ready(function() {

  //RADIOS
  $('input[name="radioA1"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioA1"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });

  $('input[name="radioA2"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioA2"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });

  $('input[name="radioA3"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioA3"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });


  //RESULTADO
  $('#resultado').click(function() { 

    //Toma el valor del radio seleccionado
    var opSeleccionada1 = $("input[name='radioA1']:checked").val();  
    var opSeleccionada2 = $("input[name='radioA2']:checked").val();  
    var opSeleccionada3 = $("input[name='radioA3']:checked").val();  

    //Doy puntuacion
    if(opSeleccionada1 === "PARANÁ"){
      var puntuacion1 = 1; 
      $('#resParcial1').addClass('correcto'); //Le agrego la clase de correcto
      $('#resParcial1').text("CORRECTO");

    }else {
      puntuacion1 = 0;
      $('#resParcial1').addClass('incorrecto'); //Le agrego la clase de incorrecto
      $('#resParcial1').text("INCORRECTO, LA RESPUESTA CORRECTA ES PARANÁ");
    }

    if(opSeleccionada2 === "ÑANDÚ"){
      var puntuacion2 = 1;
      $('#resParcial2').addClass('correcto');
      $('#resParcial2').text("CORRECTO");

    }else {
      puntuacion2 = 0;
      $('#resParcial2').addClass('incorrecto');
      $('#resParcial2').text("INCORRECTO, LA RESPUESTA CORRECTA ES ÑANDÚ");

    }

    if(opSeleccionada3 === "CAFÉ"){
      var puntuacion3 = 1;
      $('#resParcial3').addClass('correcto');
      $('#resParcial3').text("CORRECTO");

    }else {
      puntuacion3 = 0;
      $('#resParcial3').addClass('incorrecto');
      $('#resParcial3').text("INCORRECTO, LA RESPUESTA CORRECTA ES CAFÉ");

    }


    var resultado = puntuacion1 + puntuacion2 + puntuacion3;
      $('#res').addClass('mensaje'); //Le agrego la clase al mensaje del resultado

      //Segun el resultado doy el mensaje y tambien le agrego boton de reiniciio de juego
      if(resultado === 0){
        $('#res').html("¡VUELVE A INTENTARLO! <br/> SU PUNTUACIÓN ES: " + resultado + "/3").append('<br/> <button class="btn btn-primary" onclick="reiniciarJuego()">REINICIAR JUEGO</button>');
      }
      if(resultado === 1){
        $('#res').html(":( <br/> SU PUNTUACIÓN ES: " + resultado + "/3").append('<br/> <button class="btn btn-primary" onclick="reiniciarJuego()">REINICIAR JUEGO</button>');
      }
      if(resultado === 2){
        $('#res').html("¡BIEN! <br/> SU PUNTUACIÓN ES: " + resultado + "/3").append('<br/> <button class="btn btn-primary" onclick="reiniciarJuego()">REINICIAR JUEGO</button>');
      }
      if(resultado === 3){
        $('#res').html("¡EXCELENTE! <br/> SU PUNTUACIÓN ES: " + resultado + "/3").append('<br/> <button class="btn btn-primary" onclick="reiniciarJuego()">REINICIAR JUEGO</button>');
      }

  });

  //Funcion de reinicio de juego
  function reiniciarJuego(){
    $('#resParcial1').removeClass('correcto');
    $('#resParcial1').removeClass('incorrecto');
    $('#resParcial2').removeClass('correcto');
    $('#resParcial2').removeClass('incorrecto');
    $('#resParcial3').removeClass('correcto');
    $('#resParcial3').removeClass('incorrecto');
    $('#res').removeClass('mensaje'); 
  }

});



// JS de JUEGO DE PREGUNTAS-------------------

//INICIO DE SESION EN PREGUNTAS1
$(document).ready(function() {
  $('#formularioLogin2').submit(function(event) {
    event.preventDefault();

    //Obtengo los valores ingresados
    var nombreUsuario = $("#nombreUsuario").val();
    var contrasenia = $("#contrasenia").val();

    //Obtengo los valores registrados con LocalStorage
    var nombreUsuarioRegistrado = localStorage.getItem("nombreUsuario");
    var contraseniaRegristrada = localStorage.getItem("contrasenia");

    if(nombreUsuario === nombreUsuarioRegistrado && contrasenia === contraseniaRegristrada){
      // Mostrar mensaje de éxito
      Swal.fire({
      title: 'Inicio de sesion exitoso',
      text: 'Será redirigido al juego de preguntas',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'JUGAR',
      }).then((result) => {
      if (result.isConfirmed) {
      window.location.href = 'TF-DiezJuan-Preguntas2.html';
      }
      });

    }else {
      Swal.fire('Error', 'Usuario o contraseña incorrectos.', 'error');
      return;
    }

  });
});


//ARCHIVO PREGUNTAS 2 (1° PREGUNTA)
$(document).ready(function() {

  //RADIOS
  $('input[name="radioP1"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioP1"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });

  //RESULTADO
  $('#P1resultado').click(function() { 

    //Toma el valor del radio seleccionado
    var opSeleccionada1 = $("input[name='radioP1']:checked").val();   

    //Doy puntuacion
    if(opSeleccionada1 === "BUENOS AIRES"){
      var puntuacion1 = 1; 
      localStorage.setItem("flag1", "1"); //Guardo una bandera en local storage para verla en la siguiente pregunta
      $('#P1resParcial').addClass('correcto'); //Le agrego la clase de correcto
      $('#P1resParcial').text("CORRECTO");

    }else {
      puntuacion1 = 0;
      localStorage.setItem("flag1", "0"); //Guardo una bandera en local storage para verla en la siguiente pregunta
      $('#P1resParcial').addClass('incorrecto'); //Le agrego la clase de incorrecto
      $('#P1resParcial').text("INCORRECTO, LA RESPUESTA CORRECTA ES BUENOS AIRES");
    }
    

    var resultado = puntuacion1;
    $('#P1res').addClass('mensaje'); //Le agrego la clase al mensaje del resultado
    
    //Muestro el resultado parcial y agrego boton de siguiente pregunta y redirecciono
    $('#P1res').html("SU PUNTUACIÓN PARCIAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas3.html">SIGUIENTE PREGUNTA</button>');

  });
});

//ARCHIVO PREGUNTAS 3 (2° PREGUNTA)
$(document).ready(function() {

  //RADIOS
  $('input[name="radioP2"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioP2"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });

  //RESULTADO
  $('#P2resultado').click(function() { 

    //Recupero el valor de flag de la preg anterior con localstorage
    var flag = localStorage.getItem("flag1"); 
    if(flag === "1"){
      puntuacion1 = 1;
    } else if(flag === "0"){
      puntuacion1 = 0;
    }

    //Toma el valor del radio seleccionado
    var opSeleccionada2 = $("input[name='radioP2']:checked").val();   

    //Doy puntuacion
    if(opSeleccionada2 === "FÚTBOL"){
      var puntuacion2 = 1; 
      localStorage.setItem("flag2", "1"); //Guardo una bandera en local storage para verla en la siguiente pregunta
      $('#P2resParcial').addClass('correcto'); //Le agrego la clase de correcto
      $('#P2resParcial').text("CORRECTO");

    }else {
      puntuacion2 = 0;
      localStorage.setItem("flag2", "0"); //Guardo una bandera en local storage para verla en la siguiente pregunta
      $('#P2resParcial').addClass('incorrecto'); //Le agrego la clase de incorrecto
      $('#P2resParcial').text("INCORRECTO, LA RESPUESTA CORRECTA ES FÚTBOL");
    }
    
    var resultado =  puntuacion1 + puntuacion2;
    $('#P2res').addClass('mensaje'); //Le agrego la clase al mensaje del resultado
    
    //Muestro el resultado parcial y agrego boton de siguiente pregunta y redirecciono
    $('#P2res').html("SU PUNTUACIÓN PARCIAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas4.html">SIGUIENTE PREGUNTA</button>');

  });
});


//ARCHIVO PREGUNTAS 4 (3° PREGUNTA)
$(document).ready(function() {

  //Recupero el valor de flag de la preg anterior con localstorage
  var flag1 = localStorage.getItem("flag1"); 
  var flag2 = localStorage.getItem("flag2");
  if(flag1 === "1" && flag2 === "1"){
    puntuacion1 = 1;
    puntuacion2 = 1;
  } else if(flag1 === "0" && flag2 === "0"){
    puntuacion1 = 0;
    puntuacion2 = 0;
  } else if(flag1 === "1" && flag2 === "0"){
    puntuacion1 = 1;
    puntuacion2 = 0;
  } else if(flag1 === "0" && flag2 === "1"){
    puntuacion1 = 0;
    puntuacion2 = 1;
  }

  //RADIOS
  $('input[name="radioP3"]').change(function() {
    // Desactivar todos los radios
    $('input[name="radioP3"]').not(':checked').prop('disabled', true);
    
    // Activar el radio seleccionado
    $(this).prop('disabled', false);
  });

  //RESULTADO
  $('#P3resultado').click(function() { 

    //Toma el valor del radio seleccionado
    var opSeleccionada3 = $("input[name='radioP3']:checked").val();   

    //Doy puntuacion
    if(opSeleccionada3 === "PESO"){
      var puntuacion3 = 1; 
      $('#P3resParcial').addClass('correcto'); //Le agrego la clase de correcto
      $('#P3resParcial').text("CORRECTO");

    }else {
      puntuacion3 = 0;
      $('#P3resParcial').addClass('incorrecto'); //Le agrego la clase de incorrecto
      $('#P3resParcial').text("INCORRECTO, LA RESPUESTA CORRECTA ES PESO");
    }

    
    var resultado =  puntuacion1 + puntuacion2 + puntuacion3;
    $('#P3res').addClass('mensaje'); //Le agrego la clase al mensaje del resultado
    

    //Segun el resultado doy el mensaje y tambien le agrego boton de reiniciio de juego
    if(resultado === 0){
      $('#P3res').html("¡VUELVE A INTENTARLO! <br/> SU PUNTUACIÓN FINAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas2.html">REINICIAR JUEGO</button>');
    }
    if(resultado === 1){
      $('#P3res').html(":( <br/> SU PUNTUACIÓN FINAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas2.html">REINICIAR JUEGO</button>');
    }
    if(resultado === 2){
      $('#P3res').html("¡BIEN! <br/> SU PUNTUACIÓN FINAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas2.html">REINICIAR JUEGO</button>');
    }
    if(resultado === 3){
      $('#P3res').html("¡EXCELENTE! <br/> SU PUNTUACIÓN FINAL ES: " + resultado + "/3").append('<br/> <a class="btn btn-primary" href="TF-DiezJuan-Preguntas2.html">REINICIAR JUEGO</button>');
    }

  });
});