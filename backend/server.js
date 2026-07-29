const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// 🛠️ Enable CORS so your React frontend (both localhost and Vercel) can communicate with this backend
app.use(cors({
    origin: '*',
    credentials: true
}));

// Body parser middleware to handle incoming JSON payloads
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// API health check route
app.get('/api/health', (req, res) => {
    res.send('Career Nexus API is running smoothly...');
});

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle React routing safely without path-to-regexp syntax errors
app.get('(.*)', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is happily humming on port ${PORT}`);
});