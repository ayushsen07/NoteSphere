# 📝 Note App - MERN Stack with Google OAuth

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring Google OAuth authentication and modern UI design.

![Note App](https://img.shields.io/badge/React-18.3.1-blue)
![Note App](https://img.shields.io/badge/Node.js-Express-green)
![Note App](https://img.shields.io/badge/MongoDB-8.17.1-green)
![Note App](https://img.shields.io/badge/Google-OAuth-red)

## 🚀 Features

### 🔐 Authentication System
- **Traditional Email/Password Login**
  - User registration with email validation
  - Secure password hashing with bcryptjs
  - JWT token-based authentication
  - Session management with HTTP-only cookies

- **Google OAuth Integration**
  - One-click Google sign-in
  - Automatic user creation for new Google users
  - Seamless integration with existing accounts
  - Profile picture and name from Google account

### 📝 Note Management
- **Create Notes**
  - Rich text editor with formatting options
  - Add tags for organization
  - Auto-save functionality
  - Real-time preview

- **Edit & Update**
  - In-place editing
  - Version history tracking
  - Bulk operations support

- **Search & Filter**
  - Real-time search across all notes
  - Filter by tags
  - Sort by date, title, or priority
  - Advanced search with multiple criteria

- **Organization**
  - Tag-based categorization
  - Color-coded notes
  - Pin important notes
  - Archive functionality

### 🎨 User Interface
- **Modern Design**
  - Clean, responsive UI with Tailwind CSS
  - Dark/Light theme support
  - Mobile-first design approach
  - Smooth animations and transitions

- **User Experience**
  - Intuitive navigation
  - Toast notifications for feedback
  - Loading states and error handling
  - Keyboard shortcuts support

### 🔒 Security Features
- **Data Protection**
  - Encrypted password storage
  - JWT token validation
  - CORS configuration
  - Input sanitization

- **Session Management**
  - Secure HTTP-only cookies
  - Automatic token refresh
  - Session timeout handling
  - Multi-device support

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **@react-oauth/google** - Google OAuth integration

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **Passport.js** - Authentication middleware

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Nodemon** - Development server
- **PostCSS** - CSS processing

## 📁 Project Structure

```
Note-App-Using-MERN-Stack--main/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Cards/        # Note and profile cards
│   │   │   ├── Input/        # Form input components
│   │   │   ├── SearchBar/    # Search functionality
│   │   │   └── GoogleLogin.jsx # Google OAuth component
│   │   ├── pages/            # Page components
│   │   │   ├── Home/         # Main dashboard
│   │   │   ├── Login/        # Authentication pages
│   │   │   └── Signup/
│   │   ├── redux/            # State management
│   │   │   ├── store.js      # Redux store configuration
│   │   │   └── user/         # User state slice
│   │   └── utils/            # Utility functions
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js backend application
│   ├── controller/           # Request handlers
│   │   ├── auth.controller.js # Authentication logic
│   │   └── note.controller.js # Note CRUD operations
│   ├── models/               # Database models
│   │   ├── user.model.js     # User schema
│   │   └── note.model.js     # Note schema
│   ├── routes/               # API routes
│   │   ├── auth.route.js     # Authentication endpoints
│   │   └── note.route.js     # Note endpoints
│   ├── utils/                # Utility functions
│   │   ├── error.js          # Error handling
│   │   └── verifyUser.js     # JWT verification
│   ├── index.js              # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Note-App-Using-MERN-Stack--main
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   **Backend (.env file in backend folder):**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   **Frontend (.env file in frontend folder):**
   ```env
   VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```

5. **Google OAuth Setup**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API and Google OAuth2 API
   - Create OAuth 2.0 credentials
   - Add authorized origins: `http://localhost:5173`
   - Add authorized redirect URIs: `http://localhost:5173`

6. **Start the application**

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/google` - Google OAuth authentication
- `GET /api/auth/signout` - User logout

### Notes
- `GET /api/note/getnotes` - Get all notes for user
- `POST /api/note/createnote` - Create new note
- `PUT /api/note/updatenote/:id` - Update existing note
- `DELETE /api/note/deletenote/:id` - Delete note

## 🎯 Key Features Explained

### Google OAuth Integration
The app seamlessly integrates Google OAuth for enhanced user experience:

1. **One-Click Login**: Users can sign in with their Google account
2. **Automatic Account Creation**: New Google users get accounts created automatically
3. **Profile Integration**: Google profile picture and name are imported
4. **Account Linking**: Existing email users can link their Google account

### Real-time Search
- **Instant Results**: Search updates as you type
- **Multi-field Search**: Search across title, content, and tags
- **Smart Filtering**: Filter results by date, tags, or status

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Gesture support for mobile devices
- **Progressive Enhancement**: Works on all modern browsers

## 🔒 Security Considerations

- **Password Security**: All passwords are hashed using bcryptjs
- **JWT Tokens**: Secure token-based authentication
- **CORS Protection**: Configured for specific origins
- **Input Validation**: All user inputs are validated and sanitized
- **HTTPS Ready**: Configured for production HTTPS deployment

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set environment variables in your hosting platform

### Backend Deployment (Railway/Heroku)
1. Set up MongoDB Atlas for database
2. Configure environment variables
3. Deploy to your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Google OAuth for authentication
- Tailwind CSS for styling
- React community for excellent documentation
- MongoDB for database solution

---

**Built with ❤️ using MERN Stack** 