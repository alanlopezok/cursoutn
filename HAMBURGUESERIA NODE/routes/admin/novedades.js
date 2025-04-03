var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


/* GET home page. /diseño/*/
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
  res.render('admin/novedades',{
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades 

  });
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
  }); // cierra get de eliminar


  router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
      layout: 'admin/layout'
    });
  });



  router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        });
    }
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log("ID recibido en la ruta de modificar:", id);

  try {
      var novedad = await novedadesModel.getNovedadById(id);
      console.log("Datos obtenidos de la novedad:", novedad);

      if (!novedad || novedad.length === 0) {
          return res.status(404).send("Novedad no encontrada");
      }

      res.render('admin/modificar', {
          layout: 'admin/layout',
          novedad: novedad[0] // ← Enviar solo el primer objeto, no el array
      });
  } catch (error) {
      console.error("Error al obtener la novedad:", error);
      res.status(500).send("Error interno del servidor");
  }
});


router.post('/modificar', async (req, res, next) => {
  try {
       console.log(req.body.id); // para ver si trae id
      var obj = {
          titulo: req.body.titulo,
          subtitulo: req.body.subtitulo,
          cuerpo: req.body.cuerpo
      };
      console.log(obj); // para ver si trae los datos
      await novedadesModel.modificarNovedadById(obj, req.body.id);
      res.redirect('/admin/novedades');
  } catch (error) {
      console.log(error);
      res.render('admin/modificar', {
          layout: 'admin/layout',
          error: true,
          message: 'No se modificó la novedad'
      });
  } // cierro catch
}); // cierro el post





module.exports = router;
