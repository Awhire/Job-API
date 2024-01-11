const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const bcrypt = require('bcryptjs')

// Hashing the users password for security purpose: which mean generating a random bytes and combining it with the password. Hashing is a one way street, meaning it can not be reverse. We store password in a form that protect them. We use libary called bcrypt to hash users.

const register = async (req, res) => {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const tempUser =  { name, email, password: hashedPassword }

    const user = await User.create({...tempUser})
    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
    res.send('login user')
}


module.exports = {
    register,
    login
}
