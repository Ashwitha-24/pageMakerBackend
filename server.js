/**
 * @constant express epxress library for handling of server requests
 */
let express = require('express');

/**
 * @constant app instance of the express object
 */
const app = express();

/**
 * @constant bodyParser parses the json requests
 */
const bodyParser = require('body-parser');

let httpServer = require('http').createServer(app);

/**
 * @constant config object with environment variables
 */
const config = require('./config/config');

const { connectDb } = require('./config/connectionManager');
connectDb();

/**
 * @constant routes root routes object to handle all the requests.
 */
const routes = require('./routes');

/**Initialize Routes*/
app.use('/api', routes);

/**server listening on default port or given port*/
httpServer.listen(config.SERVER.PORT, () => {
	console.log(`server is up and running on port ${config.SERVER.PORT}`);
});