var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET home page. /diseño/*/
router.get('/', async function(req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout'

  });
});
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; // flavia
    var password = req.body.password; // 1234

    console.log(req.body);

    var data = await usuariosModel.getUserAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre=data.usuario;


      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    } // cierre else

  }catch (error) {
      console.error("Error en la autenticación:", error);
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true,
        errorMessage: "Ocurrió un error, intenta nuevamente."
      });
    }
  });

module.exports = router;
