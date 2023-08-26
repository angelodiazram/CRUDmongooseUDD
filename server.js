import express from 'express';
import { db } from './config/db.config.js';

import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// conexion a mongo
db()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})