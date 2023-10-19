const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")

// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))


Router.use("/auth", AuthRouter)


module.exports = Router;