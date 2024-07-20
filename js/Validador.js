// validar.js

function validar() {
    var dateElement = document.getElementById("datePicker");
    var timeElement = document.getElementById("timeSelect");
    var selectedDate = dateElement.value;
    var selectedTime = timeElement.value;
    var validador = '';
 console.log(selectedDate);
 console.log(selectedTime);
        var reservasExistentes = JSON.parse(localStorage.getItem('reservas'));
           console.log(reservasExistentes);

          var coincidencia = reservasExistentes.some(reserva => 
          
            reserva.Fecha === selectedDate &&
            reserva.Hora === selectedTime
        );




           if (coincidencia) {
          console.log("no esta disponible")
          validador = ' Hora no disponible';
          //document.getElementById('validador').innerHTML = validador;
          
        } else {

           console.log("esta disponible");
           validador = ' Hora disponible';
          // document.getElementById('validador').innerHTML = validador;
        }
    
    
    




}
