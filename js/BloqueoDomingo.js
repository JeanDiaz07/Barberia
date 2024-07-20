// Función para verificar si una fecha es domingo
function esDomingo(datePicker) {
    return datePicker.getDay() === 6;
}

// Función para bloquear domingos en un elemento input de tipo date
function bloquearDomingos() {
    var inputFecha = document.getElementById('datePicker');
    
    // Agregar un evento para verificar la fecha seleccionada
    inputFecha.addEventListener('change', function() {
        var fechaSeleccionada = new Date(this.value);
        if (esDomingo(fechaSeleccionada)) {
            // Si es domingo, establecer el valor del input en vacío
            this.value = '';
            alert('Los domingos no están disponibles.');
        }
    });
}

// Llamar a la función al cargar la página
bloquearDomingos();