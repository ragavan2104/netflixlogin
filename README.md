<div align="center">

# 🎬 Netflix Clone

### A Modern Full-Stack Web Application

*Experience the power of modern web development with this feature-rich Netflix clone*

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[🚀 Live Demo](https://netflixlogin-pia64r3jf-raagavans-projects.vercel.app) | [📖 Documentation](#-project-structure) | [🤝 Contributing](#-contributing)

</div>

---

## 🎯 Overview

This Netflix clone is a sophisticated full-stack web application that demonstrates modern web development practices. Built with cutting-edge technologies, it offers a seamless user experience with Netflix-authentic design and robust authentication system.

### ✨ Key Highlights

<table>
<tr>
<td>

🔐 **Secure Authentication**
- Mock user database integration
- Session management with local storage
- Protected route implementation

</td>
<td>

📱 **Responsive Excellence** 
- Mobile-first design approach
- Cross-device compatibility
- Fluid layouts and interactions

</td>
</tr>
<tr>
<td>

🎨 **Authentic UI/UX**
- Netflix-inspired design system
- Professional branding elements
- Intuitive user interface

</td>
<td>

⚡ **Performance Optimized**
- Lightning-fast Vite build system
- Optimized bundle sizes
- Smooth user interactions

</td>
</tr>
</table>

## 🚀 Quick Start Guide

### 📋 Prerequisites

Ensure you have the following installed on your system:

```bash
Node.js >= 18.0.0
npm >= 9.0.0 or yarn >= 1.22.0
Git >= 2.0.0
```

### ⚙️ Installation & Setup

#### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd netflix
```

#### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```
> 🌐 Backend server: `http://localhost:5000`

#### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
> 🌐 Frontend application: `http://localhost:5173`

### � Demo Credentials

Test the application using these pre-configured accounts:

| 👤 Username | 🔑 Password | 🏷️ Role |
|-------------|-------------|-----------|
| `ragavan`   | `123`       | Standard User |
| `admin`     | `admin123`  | Administrator |

> 💡 **Pro Tip:** Use these credentials to explore all application features

## 🏗️ Project Architecture

<details>
<summary><strong>📁 Directory Structure</strong></summary>

```
netflix/
├── 🔧 backend/                    # Express.js API Server
│   ├── index.js                   # Main server configuration
│   ├── package.json               # Backend dependencies & scripts
│   └── vercel.json                # Deployment configuration
│
├── 🎨 frontend/                   # React Client Application
│   ├── src/
│   │   ├── 🧩 component/
│   │   │   ├── Form.jsx           # Authentication form
│   │   │   ├── Dashboard.jsx      # User dashboard
│   │   │   ├── Success.jsx        # Success page
│   │   │   └── Fail.jsx           # Error handling
│   │   ├── App.jsx                # Main application component
│   │   ├── main.jsx               # Application entry point
│   │   └── 🎨 assets/             # Static resources
│   ├── 📦 public/                 # Public assets
│   ├── package.json               # Frontend dependencies
│   └── vite.config.js             # Build configuration
│
└── 📋 README.md                   # Project documentation
```

</details>

## 🛠️ Technology Stack

### 🎨 Frontend Technologies

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | `19.1.0` | Component-based UI library |
| **Vite** | `6.3.5` | Next-generation build tool |
| **Tailwind CSS** | `3.4.17` | Utility-first styling |
| **React Router** | `7.6.1` | Client-side routing |
| **Axios** | `1.9.0` | HTTP client library |

</div>

### ⚙️ Backend Technologies

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | `18+` | JavaScript runtime |
| **Express.js** | `5.1.0` | Web application framework |
| **CORS** | `2.8.5` | Cross-origin resource sharing |

</div>

## 🔧 Core Features

### 🔐 Authentication System
- **Secure Login Process**: Robust form validation and error handling
- **Session Management**: Persistent user sessions with local storage
- **Protected Routes**: Dashboard access restricted to authenticated users
- **Mock Database**: Simulated user authentication for demonstration

### 🎨 User Interface
- **Netflix-Authentic Design**: Pixel-perfect recreation of Netflix's visual identity
- **Responsive Layout**: Seamless experience across all device sizes
- **Loading States**: Professional loading indicators during authentication
- **Error Handling**: Graceful error messages and user feedback

### ⚡ Performance Features
- **Fast Loading**: Optimized bundle sizes with Vite
- **Modern React**: Latest React 19 features and optimizations
- **Efficient Routing**: Client-side navigation with React Router
- **Code Splitting**: Automatic code splitting for better performance

## 🌐 API Documentation

### Authentication Endpoint

#### `GET /login`

Authenticates users with username and password credentials.

**Query Parameters:**
- `username` (string, required): User's login identifier
- `passwd` (string, required): User's password

**Response Format:**
```json
{
  "success": true,
  "user": {
    "name": "Display Name",
    "username": "user_identifier"
  }
}
```

**Example Request:**
```bash
curl "http://localhost:5000/login?username=ragavan&passwd=123"
```

## 🚀 Deployment Guide

### 🌐 Frontend Deployment

#### Vercel (Recommended)
```bash
cd frontend
npm run build
vercel --prod
```

#### Netlify
```bash
cd frontend
npm run build
# Upload dist/ folder to Netlify
```

### ⚙️ Backend Deployment

#### Vercel
The backend is pre-configured for Vercel deployment with optimized settings.

```bash
cd backend
vercel --prod
```

## 🔧 Environment Configuration

### Frontend Environment Variables

Create environment files for different deployment stages:

#### `.env.development`
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME="Netflix Clone (Dev)"
```

#### `.env.production`
```env
VITE_API_URL=https://netflixlogin-pia64r3jf-raagavans-projects.vercel.app
VITE_APP_NAME="Netflix Clone"
```

## � Application Screenshots

<div align="center">

### 🔐 Login Interface
*Professional Netflix-styled authentication with responsive design*

### 📱 Dashboard Experience
*Immersive user dashboard with movie grid layout and seamless navigation*

</div>

> 📝 **Note**: Screenshots demonstrate cross-platform compatibility and authentic Netflix visual design

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### 🔧 Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

3. **Development Setup**
   ```bash
   # Install dependencies
   npm install
   
   # Start development servers
   npm run dev:all
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "✨ Add amazing new feature"
   ```

5. **Submit Pull Request**
   ```bash
   git push origin feature/amazing-new-feature
   ```

### 📋 Contribution Guidelines

- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Include tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

```
MIT License - Feel free to use, modify, and distribute
```

## 🙏 Acknowledgments & Credits

<div align="center">

### Special Thanks

**🎬 Netflix** - *For the incredible design inspiration and user experience reference*

**⚛️ React Team** - *For building an exceptional frontend library*

**🎨 Tailwind CSS** - *For the utility-first approach that accelerated development*

**⚡ Vite Team** - *For the lightning-fast development experience*

**🌐 Open Source Community** - *For the amazing tools and libraries that made this possible*

</div>

---

<div align="center">

### 🔗 Connect & Support

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/ragavan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ragavan-s-76a102258)

**⭐ Star this repository if you found it helpful!**

---

<div align="center">
  <strong>Made with ❤️ and ☕ by Ragavan</strong>
  <br>
  <em>Building the future, one commit at a time</em>
</div>

</div>
