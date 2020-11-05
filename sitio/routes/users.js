const express = require('express');
const router = express.Router();

//validaciones
const userController = require('../controllers/userController');
const loginValidator = require('../validations/loginValidator');
const registroUsuarioValidator = require('../validations/registroUsuarioValidator');

//middlewares
const avatarUser = require('../middlewares/avatarUser');

/* GET users listing. */
router.get('/register',userController.register);
router.post('/register', avatarUser.any(), registroUsuarioValidator, userController.processRegister);

router.get('/login',userController.login);
router.post('/login',loginValidator, userController.processLogin);

router.get('/profile',userController.profile);
router.get('/edit',userController.editProfile);
router.put('/profile/edit/:id', avatarUser.any(),userController.update);

router.get('/logout',userController.logout);
router.delete('/delete/:id',userController.delete);

module.exports = router;
