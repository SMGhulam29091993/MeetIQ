import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const corsOption : cors.CorsOptions = {
    origin: (origin : string | undefined, callback : (err: Error | null, allowed?: boolean) => void) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};


app.use(cors(corsOption));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;

