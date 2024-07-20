function llenado(Servicio, periodLabel) {
    let times;
    if (Servicio === 'Corte de pelo + barba') {
        times = [
            "11:00 AM",
            "12:30 PM",
            "14:00 PM",
            "15:30 PM",
            "17:00 PM",
            "18:30 PM",
        ];
    } else if (Servicio === 'Corte de pelo') {
        times = [
            "11:00 ",
            "12:00 ",
            "13:00 ",
            "14:00 ",
            "15:00 ",
            "16:00 ",
            "17:00 ",
            "18:00 ",
            "19:00 "
        ];
    } else if (Servicio === 'Corte de pelo + limpieza facial') {
        times = [
            "11:00 AM",
            "12:30 PM",
            "14:00 PM",
            "15:30 PM",
            "17:00 PM",
            "18:30 PM",
        ];
    }

    localStorage.setItem('selectedTimes', JSON.stringify(times));
    localStorage.setItem('selectedPeriod', periodLabel);
    localStorage.setItem('servicioSeleccionado', 'true'); // Set a flag indicating a service has been selected
    localStorage.setItem('selectedService', Servicio); // Store the selected service type
    window.location.href = 'Reserva.html';
}

function populateTimes() {
    const timeSelect = document.getElementById('timeSelect');
    const times = JSON.parse(localStorage.getItem('selectedTimes')) || [];
    const selectedService = localStorage.getItem('selectedService') || '';

    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        option.style.color = 'black'; // Corrected syntax
        timeSelect.appendChild(option);
    });

    // Set the value of the ServicioOPC input
    const servicioOPCInput = document.getElementById('ServicioOPC');
    if (servicioOPCInput) {
        servicioOPCInput.value = selectedService;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('Reserva.html')) {
        populateTimes();
    }
});
