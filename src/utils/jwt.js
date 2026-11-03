import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET || 'rahasia_super_aman'

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY)
    } catch (error) {
        return null;
    }
}

