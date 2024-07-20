function exportarExcel() {
    const tabla = document.getElementById('Reservas');
    const nombreArchivo = 'reserva.xlsx';
  
    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.table_to_book(tabla, {sheet: "Sheet JS"});
    
    // Guardar el libro como archivo Excel
    XLSX.writeFile(wb, nombreArchivo);
  }