/*function eliminar(index) {
    // Obtener el array de reservas del localStorage
    let reservas = JSON.parse(localStorage.getItem('reservas'));
    let reserva = reservas;
    console.log(reserva);

    if(localStorage.getItem("reservas") == null){
        reservas = [];
        
        }else{
        
        reservas = JSON.parse(localStorage.getItem("reservas"));
        
        }
        
        reservas.splice(index, 1);
        localStorage.setItem('reservas', JSON.stringify(reservas));
   alert("Reserva eliminada");
    
}*/


function eliminar(index) {
    // Obtener el array de reservas del localStorage
    let reservas = JSON.parse(localStorage.getItem('reservas'));

    // Verificar si hay reservas almacenadas
    if (reservas !== null && reservas.length > 0) {
        // Eliminar la reserva en el índice especificado
        reservas.splice(index, 1);
        
        // Guardar el array de reservas actualizado en el localStorage
        localStorage.setItem('reservas', JSON.stringify(reservas));
        
        alert("Reserva eliminada");
    } else {
        alert("No hay reservas para eliminar");
    }
}
