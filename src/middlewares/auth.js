import { verifyToken } from "../utils/jwt.js"

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak, token tidak ditemukan' })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
        return res.status(403).json({ message: 'Token tidak valid atau kedaluwarsa' })
    }

    req.user = decoded
    next()
}

export { authMiddleware }
