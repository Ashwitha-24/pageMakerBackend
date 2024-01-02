/**
 * @constant router express router method to handle routes efficiently
*/
const router = require('express').Router();

const user = require('./modules/user/user.routes');

router.use('/user', user);

module.exports = router;