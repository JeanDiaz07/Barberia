let currentEditIndex = -1;

function editar(index) {
    currentEditIndex = index;
    const usuario = data[index];

    document.getElementById('Nombre').value = usuario.Nombre;
    document.getElementById('Apellido').value = usuario.Apellido;
    document.getElementById('Rut').value = usuario.Rut;
    document.getElementById('email').value = usuario.Email;
    document.getElementById('Telefono').value = usuario.Telefono;
    document.getElementById('barbero').value = usuario.Barbero;
    document.getElementById('fecha').value = usuario.Fecha;
    document.getElementById('hora').value = usuario.Hora;

    // Abre el modal
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
}

function guardarCambios() {
    if (currentEditIndex > -1) {
        data[currentEditIndex].Nombre = document.getElementById('Nombre').value;
        data[currentEditIndex].Apellido = document.getElementById('Apellido').value;
        data[currentEditIndex].Rut = document.getElementById('Rut').value;
        data[currentEditIndex].Email = document.getElementById('email').value;
        data[currentEditIndex].Telefono = document.getElementById('Telefono').value;
        data[currentEditIndex].Barbero = document.getElementById('barbero').value;
        data[currentEditIndex].Fecha = document.getElementById('fecha').value;
        data[currentEditIndex].Hora = document.getElementById('hora').value;

        // Guardar datos actualizados en localStorage
        localStorage.setItem('reservas', JSON.stringify(data));

        // Actualizar la tabla y cerrar el modal
        displayTable(data, currentPage);
        const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();
    }
}
