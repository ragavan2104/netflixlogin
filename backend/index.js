const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'https://netflix-clone-rose-three.vercel.app'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// Mock user database
const mockUsers = [
    { username: "ragavan", password: "123", name: "Ragavan" },
    { username: "admin", password: "admin123", name: "Admin User" }
];

// Add a root route for testing
app.get("/", (req, res) => {
    res.json({ message: "Backend server is running" });
});

app.get("/login", function(req, res) {
    const { username, passwd } = req.query;
    
    console.log('Login attempt:', { username, passwd });
    
    // Find user
    const user = mockUsers.find(u => u.username === username);
    console.log('Found user:', user);
    
    if (!user) {
        return res.json({ 
            success: false, 
            message: "User not found"
        });
    }
      // Convert both to strings for comparison
    if (String(user.password) !== String(passwd)) {
        return res.json({ 
            success: false, 
            message: "Invalid password"
        });
    }
    
    res.json({
        success: true,
        user: {
            name: user.name,
            username: user.username
        }
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}....`);
})