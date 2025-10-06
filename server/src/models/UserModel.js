import mongoose from 'mongoose'


const DataSchema = mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},

})

export const UserModel = mongoose.model('User', DataSchema)