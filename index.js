import express from 'express';
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import modelRoutes from './routes/model.route.js';
import path from "path";

dotenv.config();
const __dirname = path.resolve();
const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ extended: true, parameterLimit:1000000 ,limit: '500mb' }));
app.use('/api/messages/asr/voice_to_text', express.raw({ type: 'audio/*', limit: '50mb' }));
app.use('/api/messages/tts/text_to_voice', express.raw({ limit: '50mb' }));

app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: 'https://hackronyx-frontend-ajjg.vercel.app', // allow only your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you're using cookies or authentication headers
}));

app.use("/api", modelRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

 





