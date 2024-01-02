const mongoose = require('mongoose')

const { DATABASE } = require('./config');

class ConnectionManager {

    connectDb = async () => {
        return new Promise((resolve, reject) => {
            try {
                const db = mongoose.createConnection(DATABASE.URI);
                db.on('error', (err) => {
                    console.error(`Error while connecting to database: ${DATABASE.URI}: `, err);
                });
                resolve(db);
            } catch (error) {
                console.log('Error while connecting to master database: ', error);
                reject(error);
            }
        });
    }
}

module.exports = new ConnectionManager();
