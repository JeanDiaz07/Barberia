// script.js

function llenado(Servicio) {
    let times;
    if (Servicio === 'barba') {
        times = [
            "11:00 AM ",
            "12:30 PM ",
            "14:00 PM ",
            "15:30 PM ",
            "17:00 PM ",
            "18:30 PM ",
        ];
    } else if (Servicio === 'pelo') {
        times = [
            "11:00 AM ",
            "12:00 PM ",
            "13:00 PM ",
            "14:00 PM ",
            "15:00 PM ",
            "16:00 PM ",
            "17:00 PM ",
            "18:00 PM ",
            "19:00 PM "
        ];
    } else if (Servicio === 'facial') {
        times = [
            "11:00 AM ",
            "12:30 PM ",
            "14:00 PM ",
            "15:30 PM ",
            "17:00 PM ",
            "18:30 PM ",
        ];
    }

    localStorage.setItem('selectedTimes', JSON.stringify(times));
}

function redirectWithSelection() {
    const serviceSelect = document.getElementById('serviceSelect');
    const selectedService = serviceSelect.value;

    if (selectedService) {
        llenado(selectedService);
        window.location.href = 'Reserva.html';
    } else {
        alert('Please select a service');
    }
}

function populateTimes() {
    const timeSelect = document.getElementById('timeSelect');
    const times = JSON.parse(localStorage.getItem('selectedTimes')) || [];

    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('Reserva.html')) {
        populateTimes();
    }
});
