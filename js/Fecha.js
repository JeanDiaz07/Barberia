

function setMinDate() {
  // Obtener la fecha actual
  const today = new Date();
  // Convertir la fecha actual a una cadena en formato YYYY-MM-DD
  const todayString = today.toISOString().split('T')[0];
  // Establecer el atributo 'min' del campo de entrada de fecha
  document.getElementById('datePicker').min = todayString;
}

// Ejecutar la función al cargar la página
setMinDate();