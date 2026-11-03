import { AuthService } from "../service/auth.service.js"

export class AuthController {
    static async register(req, res) {
        try {
            const { name, email, password } = req.body

            const newUser = await AuthService.registerService(name, email, password)
            res.status(201).json({
                message: "Register berhasil",
                data: newUser
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Gagal register' })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body

            const employeeLogin = await AuthService.loginService(email, password)
            
            if (employeeLogin.message === 'Email atau password salah.') {
                res.status(400).json({
                    message: employeeLogin.message
                })
            } 

            if (employeeLogin.message === 'Password salah.') {
                res.status(400).json({
                    message: employeeLogin.message
                })
            } 

            res.status(200).json({
                message: employeeLogin.message,
                data: {
                    token: employeeLogin.token
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Gagal login' })
        }
    }

    static async profile(req, res) {
        try {            
            res.json({
                message: 'Berhasil mengakses data privat',
                user: req.user 
            })
        } catch (error) {
        }
    }
}

