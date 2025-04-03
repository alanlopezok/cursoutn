const pool = require('./bd');
const md5 = require('md5');

async function getUserAndPassword(user, password) {
  try {
    var query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1';
    var rows = await pool.query(query, [user, md5(password)]);

    return rows[0][0]; // Devuelve el primer usuario encontrado o undefined si no hay ninguno
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

module.exports = { getUserAndPassword };