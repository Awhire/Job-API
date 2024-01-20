const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

// Hashing the users password for security purpose: which mean generating a random bytes and combining it with the password. Hashing is a one way street, meaning it can not be reverse. We store password in a form that protect them. We use libary called bcrypt to hash users.

const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT() 
    res.status(StatusCodes.CREATED).json({ user: {name: user.name}, token })
}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})
    
    if(!user){
        throw new UnauthenticatedError('Invalid Email')
    }

    // compare password
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Password')
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}


module.exports = {
    register,
    login
}
