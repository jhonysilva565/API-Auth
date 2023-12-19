import { Router } from "express";

import 
    {
    getAllLogins,
    getLoginByID,
    singUp
    } from "../controllers/AuthController.js";

const auth = Router()

auth
    .get('/', getAllLogins)
    // .get('/:id', getLoginByID)
    // .post('/', singUp)

export default auth