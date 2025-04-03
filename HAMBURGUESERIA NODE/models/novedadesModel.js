var pool = require("./bd");

/* sirve para listar las novedades */
async function getNovedades() {
  var query = 'select * from novedades';
  var rows = await pool.query(query);

  return rows[0]; // Devuelve solo el array de filas
}
async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0]; // Devuelve solo el array de resultados
  }

module.exports = { getNovedades,deleteNovedadesById};