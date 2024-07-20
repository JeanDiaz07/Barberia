document.getElementById("Reserva").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Call the validation function
    var coincidencia = validar();
     
    if (coincidencia) {
        
        createReservation();

    } else {
        alert("La reserva no está disponible ya que la fecha y hora estan ocupada.");
      
    }
});

function createReservation() {
    var formulario = document.getElementById("Reserva");

    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Email = document.getElementById("email").value;
    var Telefono = document.getElementById("Telefono").value;
    var Fecha = document.getElementById("datePicker").value;
    var Hora = document.getElementById("timeSelect").value;
    var Servicio = document.getElementById("ServicioOPC").value;
    var Barbero = document.getElementById("Persona").value;

    const Reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    Reservas.push({
        Nombre: Nombre,
        Apellido: Apellido,
        Email: Email,
        Telefono: Telefono,
        Fecha: Fecha,
        Hora: Hora,
        Servicio: Servicio,
        Barbero: Barbero
    });

    localStorage.setItem('reservas', JSON.stringify(Reservas));

    console.log("Fueron guardados");
    formulario.reset();

    // Assign data to modal
    document.getElementById("modalName").textContent = Nombre;
    document.getElementById("modalApellido").textContent = Apellido;
    document.getElementById("modalEmail").textContent = Email;
    document.getElementById("modalTelefono").textContent = Telefono;
    document.getElementById("modalFecha").textContent = Fecha;
    document.getElementById("modalHora").textContent = Hora;
    document.getElementById("modalServicio").textContent = Servicio;
    document.getElementById("modalBarbero").textContent = Barbero;

    // Show the modal (assuming you're using Bootstrap)
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    });
    myModal.show();
}
