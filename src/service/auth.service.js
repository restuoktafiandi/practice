import { db } from '../config/db.js'
import { handleComparePassword } from '../utils/bcrypt.js'
import { generateToken } from '../utils/jwt.js'
import { v4 as uuidv4 } from 'uuid'

export class AuthService {
     static async registerService(name, email, password) {
        try {
            const id = uuidv4()
            const hashedPassword = await handleComparePassword(password, 10);
            const [rows] = await db.query(
                'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
                [id, name, email, hashedPassword]
            );
            return ({
                message: 'User berhasil didaftarkan!',
                data: rows
            })
        } catch (error) {
            
        }
    }

    static async loginService(email, password) {
        try {
            const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            if (rows.length === 0) {
                return { message: 'Email atau password salah.' }
            }

            const employee = rows[0]
            const isMatchPassword = await handleComparePassword(password, employee.password)
            if (!isMatchPassword) {
                return { message: "Password salah." }
            }

            const token = generateToken({
                id: employee.id,
                email: employee.email
            })

            return { message: "Berhasil login", token: token}
        } catch (error) {

        }
    }
}