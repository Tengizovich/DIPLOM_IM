class userController {
    async registration(req, res) {}
    async login(req, res) {}
    async check(req, res, next) {
        const {id} = req.query
        res.json(id)
    }
    }
module.exports = new UserController()