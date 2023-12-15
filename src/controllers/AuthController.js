import Login from './db'
const getAllLogins = async (req, res) => {
    try{
        const auth = await db.find({})
        
        res.json(auth)  
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getLoginByID = async (req, res) => {

}

const singUp = async (req, res) => {
    const {login, senha} = req.body

    const newLogin = new login
}