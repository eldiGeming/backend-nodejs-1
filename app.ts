import express, { Application } from 'express';
import userRoutes from './routes/UserRoute';
import bukuRoutes from './routes/BukuRoute';
import dotenv from 'dotenv';
import cors from 'cors';  // Cors akan dikenali sekarang


// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Izinkan CORS


// Routes
app.use('/api', userRoutes);
app.use('/api', bukuRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
