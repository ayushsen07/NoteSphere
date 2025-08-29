import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body

  const isValidUser = await User.findOne({ email })

  if (isValidUser) {
    return next(errorHandler(400, "User already Exist"))
  }

  const hashedPassword = bcryptjs.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
    })
  } catch (error) {
    next(error)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body
  console.log(email, password)

  try {
    const validUser = await User.findOne({ email })
    // console.log(validUser);


    if (!validUser) {
      return next(errorHandler(404, "User not found"))
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password)
    // console.log(validPassword);


    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"))
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    // console.log(token);


    const { password: pass, ...rest } = validUser._doc

    res.cookie("access_token", token, {
      httpOnly: true, secure: true,
      sameSite: "None",
    }).status(200).json({
      success: true,
      message: "Login Successful!",
      rest,
    })
  } catch (error) {
    next(error)
  }
}

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token", {
  httpOnly: true,
  secure: true,
  sameSite: "none"})

    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    })
  } catch (error) {
    next(error)
  }
}

// Google OAuth functions
export const googleAuth = async (req, res, next) => {
  try {
    const { googleId, email, username, avatar } = req.body

    // Check if user exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      // User exists, check if they have Google ID
      if (!existingUser.googleId) {
        // Update existing user with Google ID
        existingUser.googleId = googleId
        existingUser.avatar = avatar
        await existingUser.save()
      }

      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET)
      const { password: pass, ...rest } = existingUser._doc

      res.cookie("access_token", token, { httpOnly: true }).status(200).json({
        success: true,
        message: "Google Login Successful!",
        rest,
      })
    } else {
      // Create new user
      const newUser = new User({
        username,
        email,
        googleId,
        avatar,
      })

      await newUser.save()

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
      const { password: pass, ...rest } = newUser._doc

      res.cookie("access_token", token, { httpOnly: true }).status(201).json({
        success: true,
        message: "Google User Created Successfully!",
        rest,
      })
    }
  } catch (error) {
    next(error)
  }
}
