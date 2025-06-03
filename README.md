# 🎬 Netflix Clone



A modern Netflix clone built with React and Node.js, featuring user authentication, responsive design, and a sleek dashboard interface.

## ✨ Features

- 🔐 **User Authentication** - Secure login system with mock user database
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🎨 **Netflix-like Interface** - Authentic Netflix styling and branding
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🛡️ **Protected Routes** - Dashboard access only for authenticated users
- 🎯 **Modern Tech Stack** - React 19, Express.js, Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm start
   ```
   Server will run on `http://localhost:5000`

5. **Start the Frontend Development Server**
   ```bash
   cd ../frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 🔑 Demo Credentials

Use these credentials to test the application:

| Username | Password | Role |
|----------|----------|------|
| `ragavan` | `123` | User |
| `admin` | `admin123` | Admin User |

## 🏗️ Project Structure

```
netflix/
├── backend/                 # Express.js backend
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── vercel.json         # Vercel deployment config
├── frontend/               # React frontend
│   ├── src/
│   │   ├── component/
│   │   │   ├── Form.jsx    # Login form component
│   │   │   ├── Dashboard.jsx # Main dashboard
│   │   │   └── Fail.jsx    # Error page
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Next generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router 7.6.1** - Client-side routing
- **Axios 1.9.0** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **CORS 2.8.5** - Cross-origin resource sharing

## 🎯 Key Components

### Authentication System
- **Login Form** (`Form.jsx`) - Netflix-styled login interface
- **Protected Dashboard** (`Dashboard.jsx`) - User dashboard with logout functionality
- **Mock Database** - Simple user authentication system

### Features
- ✅ Form validation and error handling
- ✅ Loading states during authentication
- ✅ Local storage for user session management
- ✅ Responsive design for mobile and desktop
- ✅ Netflix-authentic styling and branding

## 🌐 API Endpoints

### Authentication
- `GET /login?username={username}&passwd={password}` - User login

**Response Format:**
```json
{
  "success": true,
  "user": {
    "name": "User Name",
    "username": "username"
  }
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Vercel)
The backend is configured for Vercel deployment with `vercel.json`.

## 🔧 Environment Variables

### Frontend
Create `.env.development` and `.env.production` files:
```env
VITE_API_URL=http://localhost:5000  # Development
VITE_API_URL=https://your-backend-url.vercel.app  # Production
```

## 📱 Screenshots

### Login Page
- Netflix-authentic background and styling
- Responsive form with validation
- Loading states and error handling

### Dashboard
- Welcome message with user name
- Movie grid layout
- Logout functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Netflix for the design inspiration
- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vite for the blazing fast development experience

---

<div align="center">
  Made with ❤️ by <strong>Ragavan</strong>
</div>
