var express = require('express');
var router = express.Router();

let mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);
router.get('/ayuda', mainController.help);
router.get('/nosotros', mainController.about);

module.exports = router;
