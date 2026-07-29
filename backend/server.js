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

// Enable CORS so your React frontend (localhost and production) can communicate with this backend
app.use(cors({
    origin: '*',
    credentials: true
}));

// Body parser middleware to handle incoming JSON payloads
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// API health check route
app.get('/api/health', (req, res) => {
    res.send('Career Nexus API is running smoothly...');
});

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Express fallback middleware using no path string to prevent path-to-regexp errors
app.use((req, res, next) => {
    // If request starts with /api and wasn't matched above, return a 404 JSON response
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'API Route Not Found' });
    }
    // Fallback to sending index.html for frontend routing
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'), (err) => {
        if (err) {
            res.status(200).send('Career Nexus Backend API Service');
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is happily humming on port ${PORT}`);
});