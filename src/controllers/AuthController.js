// import authModel from "../models/db/login.js"

const getAllLogins = async (req, res) => {
    try {
        const message = 'A api está funcionando corretamente.' 

        // console.log('A API está funcionando corretamente.');

        res.json(message)
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
}

const getLoginByID = async (req, res) => {

}

const singUp = async (req, res) => {
    const {login, password} = req.body

    const newLogin = new login ({
        login,
        password
    })
}

export {
    getAllLogins,
    getLoginByID,
    singUp
}