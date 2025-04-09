import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import Listing from "../models/Listing.js";  // Import property model

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // Search by Budget
        const budgetMatch = message.match(/under\s*₹?(\d+),?(\d*)/i);
        if (budgetMatch) {
            const budget = parseInt(budgetMatch[1] + (budgetMatch[2] || "0"), 10);
            const listings = await Listing.find({ price: { $lte: budget } }).limit(3);
            if (listings.length > 0) {
                return res.json({ reply: `Here are properties under ₹${budget}:\n\n${listings.map(l => `🏠 ${l.title} - ₹${l.price}/month`).join("\n")}` });
            } else {
                return res.json({ reply: `No properties found under ₹${budget}. Try increasing your budget.` });
            }
        }

        // Search by Location
        const locationMatch = message.match(/find\s*(a|an|some)?\s*(rooms|houses|flats)?\s*in\s*([\w\s]+)/i);
        if (locationMatch) {
            const location = locationMatch[3].trim();
            const listings = await Listing.find({ location: { $regex: new RegExp(location, "i") } }).limit(3);
            if (listings.length > 0) {
                return res.json({ reply: `Here are properties in ${location}:\n\n${listings.map(l => `🏠 ${l.title} - ₹${l.price}/month`).join("\n")}` });
            } else {
                return res.json({ reply: `No properties found in ${location}. Try another location.` });
            }
        }

        // Booking Assistance
        if (message.toLowerCase().includes("schedule a visit")) {
            return res.json({ reply: "You can schedule a visit by contacting the owner through the property details page or calling our support at +91-XXXXXXXXXX." });
        }

        // Rental Process Guidance
        if (message.toLowerCase().includes("documents needed for renting")) {
            return res.json({ reply: "You need the following documents:\n1️⃣ Aadhar Card / PAN Card\n2️⃣ Proof of Income\n3️⃣ Rental Agreement\n4️⃣ Security Deposit Receipt\nLet me know if you need more details!" });
        }

        // Default AI Response (Real Estate Topics Only)
        const systemPrompt = "You are a real estate assistant. Answer only property and room booking-related questions.";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const result = await model.generateContent([systemPrompt, message]);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

export default router;
