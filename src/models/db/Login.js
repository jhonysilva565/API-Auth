import mongoose from 'mongoose'

const authSchema = new mongoose.Schema(
    {
        login: String,
        password: String
    }
)

const authModel = mongoose.model('logins', authSchema)

export default authModel;