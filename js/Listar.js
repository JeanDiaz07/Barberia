const rowsPerPage = 5; // Número de filas por página
let currentPage = 1;
let data = []; // Esta variable contendrá los datos de la tabla

document.addEventListener('DOMContentLoaded', function () {
    loadData();
    setupPagination(data);
    displayTable(data, 1);
});

function loadData() {
    // Supongamos que los datos están almacenados en localStorage con la clave 'reservas'
    const storedData = localStorage.getItem('reservas');
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        data = []; // Inicializar con datos vacíos si no hay datos en localStorage
    }
}

function displayTable(data, page = 1) {
    const tableBody = document.getElementById('tablaBody');
    tableBody.innerHTML = '';

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${row.Nombre}</td>
            <td>${row.Apellido}</td>
            <td>${row.Servicio}</td>
            <td>${row.Email}</td>
            <td>${row.Telefono}</td>
            <td>${row.Barbero}</td>
            <td>${row.Fecha}</td>
            <td>${row.Hora}</td>
            <td><button class="btn btn-danger" onclick="eliminar(${start + index})">Eliminar</button></td>
            <td><button class="btn btn-warning" onclick="editar(${start + index})">Modificar</button></td>
        `;
        tableBody.appendChild(tr);
    });
}

function setupPagination(data) {
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = 'paginationButton btn btn-primary';
        button.addEventListener('click', () => {
            currentPage = i;
            displayTable(data, i);
            document.querySelectorAll('.paginationButton').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        paginationControls.appendChild(button);
    }

    if (paginationControls.children.length > 0) {
        paginationControls.children[0].classList.add('active');
    }
}

document.getElementById('searchBar').addEventListener('input', () => {
    searchTable();
});

function searchTable() {
    const searchText = document.getElementById('searchBar').value.toLowerCase();
    const filteredData = data.filter(row => 
        row.Nombre.toLowerCase().includes(searchText) ||
        row.Apellido.toLowerCase().includes(searchText) ||
        row.Servicio.toLowerCase().includes(searchText) ||
        row.Email.toLowerCase().includes(searchText) ||
        row.Telefono.toLowerCase().includes(searchText) ||
        row.Barbero.toLowerCase().includes(searchText) ||
        row.Fecha.toLowerCase().includes(searchText) ||
        row.Hora.toLowerCase().includes(searchText)
    );
    setupPagination(filteredData);
    displayTable(filteredData, 1);
}

function eliminar(index) {
    data.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(data));
    setupPagination(data);
    displayTable(data, currentPage);
}

