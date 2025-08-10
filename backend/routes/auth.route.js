import express from "express"
import { signin, signout, signup, googleAuth } from "../controller/auth.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()
// console.log('sigup is called');

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", googleAuth)
router.get("/signout", verifyToken, signout)

export default router
