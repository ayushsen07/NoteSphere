import React from "react"
import { GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice"
import axios from "axios"

const GoogleLoginButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      // Start the sign-in process
      dispatch(signInStart())

      // Decode the JWT token to get user info
      const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]))
      
      const { email, name, picture, sub: googleId } = decoded

      // Send to backend
      const response = await axios.post(
        "http://localhost:3000/api/auth/google",
        {
          googleId,
          email,
          username: name,
          avatar: picture,
        },
        { withCredentials: true }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        // console.log('Google login successful:', response.data)
        
        // Dispatch success action to update Redux state
        dispatch(signInSuccess(response.data))
        
        // Navigate to home page
        navigate("/")
      } else {
        // Handle unsuccessful response
        toast.error(response.data.message || "Google login failed")
        dispatch(signInFailure(response.data.message || "Google login failed"))
      }
    } catch (error) {
      console.error("Google login error:", error)
      toast.error("Google login failed. Please try again.")
      dispatch(signInFailure(error.message || "Google login failed"))
    }
  }

  const handleGoogleError = () => {
    toast.error("Google login failed. Please try again.")
    dispatch(signInFailure("Google login failed"))
  }

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap
        theme="outline"
        size="large"
        text="continue_with"
        shape="rectangular"
        width="100%"
      />
    </div>
  )
}

export default GoogleLoginButton 