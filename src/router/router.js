import express from "express"
import { AuthController } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middlewares/auth.js"

const router = express.Router()

router.post("/api/auth/register", AuthController.register)
router.post("/api/auth/login", AuthController.login)
router.get("/api/auth/profile", authMiddleware, AuthController.profile)

export default router
