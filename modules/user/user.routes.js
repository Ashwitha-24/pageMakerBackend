/**
 * @constant router express router method to handle routes efficiently
*/
const router = require('express').Router();

const userController = require('./user.controller');

router.post('/register',
	(req, res) => userController.register(req, res));

router.post('/login',
	(req, res) => userController.login(req, res));

module.exports = router;