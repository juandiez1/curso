// TF Diez Juan

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


$(document).ready(function() {

  var edad = $("#edad").val();
  
   if(edad<18){
    alert("Usted es menor de edad, no puede continuar con el registro")
   } else if (edad>100){
    alert("Por favor ingresar una edad válida")
   }

});