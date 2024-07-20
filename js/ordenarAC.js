function ordenarAscendente() {
  console.log("funciona ascendente");
  var tabla, filas, cambio, i, x, y;
  tabla = document.getElementById("TablaReservas");
  cambio = true;
  while (cambio) {
    cambio = false;
    filas = tabla.rows;
    for (i = 1; i < (filas.length - 1); i++) {
      x = filas[i].getElementsByTagName("TD")[0];
      y = filas[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML > y.innerHTML) {
        filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
        cambio = true;
        break;
      }
    }
  }
}