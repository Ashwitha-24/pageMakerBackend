class userController {

    async register(req, res) {
        console.log(req.body);
    }
}

module.exports = new userController();