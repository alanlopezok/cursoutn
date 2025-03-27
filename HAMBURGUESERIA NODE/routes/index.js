var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* post para capturar la info del form */
router.post('/', async(req, res, next) =>{
/* almacena la info del form */
var nombre = req.body.nombre;
var apellido = req.body.apellido;
var mail = req.body.mail;
var telefono = req.body.telefono;
var archivo = req.body.archivo;

console.log(req.body)

var obj = {
  to: 'alanemanuellopez@gmail.com',
  subject: 'cv desde la web',
  html: nombre + " " + apellido + " " + " se contacta desde la web de prueba." + mail + " " + telefono + archivo
}
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
var info = await transport.sendMail(obj);
res.render('index', {
  message: 'Mensaje enviado correctamente.',
});

}); /*CIERRO EL POST*/

module.exports = router;
