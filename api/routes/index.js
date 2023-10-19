const Router = require('express').Router()
const AuthRouter = require("./AuthRouter")
const UserRouter = require("./UserRouter")
const ListRouter = require("./ListRouter")
// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))


Router.use("/auth", AuthRouter)
Router.use("/users", UserRouter)
Router.use("/lists", ListRouter)


module.exports = Router;