import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from "./routes/routes.js";
import { connect } from './config/database.js'; 

dotenv.config();
const app = express();
app.use(cors()); 

// Use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối đến cơ sở dữ liệu
connect()
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch(error => {
        console.error("Database connection failed: ", error);
        process.exit(1); 
    });

// use router
app.use(router);

// Welcome route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to tour booking manager api' });
});

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});