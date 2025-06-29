import express from "express";
import { DIYmodel } from "../controllers/DIYmodel.js";
import { speech_to_text } from "../controllers/speech_to_text.js";

const router = express.Router();

// Health check endpoint
router.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

router.post("/DIYmodel", DIYmodel);
router.post("/speech_to_text", speech_to_text);  // speech to text

export default router;










