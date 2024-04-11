import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    admin: Boolean
}, {
    timestamps: true
})

export default mongoose.model('User', User);