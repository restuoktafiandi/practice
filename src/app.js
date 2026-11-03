import express from "express"
import dotenv from "dotenv"
import router from "./router/router.js"

dotenv.config()

const app = express()
app.use(express.json())

app.use(router)

app.use((_, res) => {
    res.status(400).json({
        message: "not found"
    })
})

app.listen(process.env.PORT, () => {
    console.info("Server running")
})
