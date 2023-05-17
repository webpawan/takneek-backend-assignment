import express from "express";
const app = express();
const PORT = 3000
import "./db/connection.js";
import userRouter from "./routes/userRoutes.js";

app.use(express.json())

app.use("/api/user",userRouter)

app.listen(PORT,()=>{
    console.log("server connected");
})