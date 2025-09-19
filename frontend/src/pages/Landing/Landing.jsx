import React from "react"
import { Link } from "react-router-dom"
import { FaStickyNote, FaLightbulb, FaRocket } from "react-icons/fa"

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              NoteSphere
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 font-light">
              a space for your thinking
            </p>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Capture your ideas, organize your thoughts, and never lose track of your inspiration. 
            NoteSphere is your personal digital notebook designed for modern thinkers.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
              <FaStickyNote className="text-[#2B85FF] text-xl" />
              <span className="text-sm">Smart Notes</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
              <FaLightbulb className="text-[#2B85FF] text-xl" />
              <span className="text-sm">Quick Ideas</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
              <FaRocket className="text-[#2B85FF] text-xl" />
              <span className="text-sm">Fast Access</span>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="space-y-4">
            <Link
              to="/login"
              className="inline-block bg-[#2B85FF] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-[#2B85FF] hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image/Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main illustration container */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#2B85FF] to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* Floating note elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white bg-opacity-20 rounded-lg transform rotate-12"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-white bg-opacity-30 rounded-lg transform -rotate-6"></div>
              <div className="absolute bottom-12 left-12 w-14 h-14 bg-white bg-opacity-25 rounded-lg transform rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-10 h-10 bg-white bg-opacity-20 rounded-lg transform -rotate-12"></div>
              
              {/* Central icon */}
              <div className="text-white text-8xl lg:text-9xl">
                <FaStickyNote />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
