document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");

    // Obtener las reservas del localStorage o inicializar si no existen
    let reservations = JSON.parse(localStorage.getItem('reservas')) || [];
   
    // Obtener la fecha actual
    const today = new Date();

    // Función para generar el calendario
    function generateCalendar() {
        let calendarHTML = "<table class='table table-bordered'><thead><tr><th>Día/Hora</th>"; // Encabezado de la tabla

        // Generar los encabezados de las horas
        for (let hour = 10; hour < 21; hour++) {
            calendarHTML += "<th>" + hour + ":00</th>";
        }
        calendarHTML += "</tr></thead><tbody>";

        // Generar las filas de la tabla para cada día de la semana
        for (let day = 0; day < 6; day++) {
            const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + day);
            const dateString = currentDate.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
            
            calendarHTML += "<tr><td>" + currentDate.toLocaleDateString() + "</td>";
          
            // Generar las celdas de la tabla para cada hora del día
            for (let hour = 10; hour < 21; hour++) {
                const timeString = hour.toString().padStart(2, '0') + ":00";
                console.log(timeString);
                // Verifica si hay una reserva para la hora y fecha específica
                let isOccupied = reservations.some(res => res.Fecha === dateString && res.Hora === timeString);
            
                // Añade el resultado al calendario HTML
                calendarHTML += `<td class='${isOccupied ? 'occupied' : 'available'}'>${isOccupied ? 'Reservado' : 'Disponible'}</td>`;
            }
            
            calendarHTML += "</tr>";
        }

        calendarHTML += "</tbody></table>";

        calendar.innerHTML = calendarHTML;
    }

    // Generar el calendario al cargar la página
    generateCalendar();
});
