const mysql = require('mysql2');

// Configura la conexión a tu base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos'
});

// Conéctate a la base de datos
connection.connect(function(err) {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ejecuta una consulta
connection.query('SELECT * FROM tu_tabla', function(err, results, fields) {
  if (err) {
    console.error('Error al ejecutar la consulta:', err);
    return;
  }
  console.log('Resultados de la consulta:', results);
});

// Cierra la conexión cuando hayas terminado
connection.end();