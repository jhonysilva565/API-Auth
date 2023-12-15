import bodyParser from "body-parser"
import auth from './auth.js'

const routes = (app) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: false})
    )
    app.use('/auth', auth)
}

export default routes;