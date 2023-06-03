// TF Diez Juan


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
      alert("Por favor complete los campos obligatorios (*)")
    }else if(edad<18){ //verificacion de edad
        alert("Usted es menor de edad, no puede continuar con el registro")
          } else if (edad>100){
          alert("Por favor ingresar una edad válida")
              }
  
  });

});


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


