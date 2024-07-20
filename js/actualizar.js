function actualizarDatosAutomaticamente(intervalo) {
    setInterval(actualizarTablaReservas, intervalo);
    actualizarDatosAutomaticamente(5000);
  }