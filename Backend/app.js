import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/user.js";

const app = express();
dotenv.config({path : "./config/config.env"});

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods : ["POST","GET","DELETE","PUT"],
    credentials : true,
})
);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',userRouter);

app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware)
export default app;