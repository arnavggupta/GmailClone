import express from "express";
import dbconnection from "./Database/dbconnection.js";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

const port = process.env.port||5000;

dbconnection();



app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/",router);



app.listen(port,()=>{
    console.log(`Server is Started at ${port}`);
})



