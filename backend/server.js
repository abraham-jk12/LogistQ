import dotenv from 'dotenv';        
dotenv.config();                    

import express from "express";
import cors from 'cors';

import authRouter from "./routes/auth.js";
import categoryRouter from './routes/category.js';
import supplierRouter from './routes/supplier.js';
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';
import orderRouter from './routes/order.js';
import dashboardRouter from './routes/dashboard.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

app.use(express.static('public'));

app.use(cors({
  origin: ["https://logist-q-client.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/dashboard", dashboardRouter);
app.use("/api/auth", authRouter);
app.use("/api/supplier", supplierRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/order", orderRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
