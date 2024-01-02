/**to indicate that the code should be executed in "strict mode"*/
'use strict';

/**import to access environment file*/
require('dotenv').config();

/**
 * @constant assert built in method to to check the conditions
 */
const assert = require('assert');

const { NODE_ENV, PORT, DATABASE_URI } = process.env;

assert(NODE_ENV, 'NODE_ENV is required'); // Configure NODE_ENV = 'local' in .env file for local
assert(PORT, 'PORT is required');
assert(DATABASE_URI, 'DATABASE_URI is required');

module.exports = {
    SERVER: {
        NODE_ENV: NODE_ENV,
        PORT: PORT
    },
    DATABASE: {
        URI: DATABASE_URI
    }
}