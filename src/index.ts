import express from "express";
import mongoose from 'mongoose';
import studentrouter from "./router/students";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(express.json());

mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://cooluser:J$nEd6&eSMmD3hY@cluster0.7feyr.mongodb.net/StudentList?retryWrites=true&w=majority&appName=Cluster0';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected")
}

app.use("/students", studentrouter);


app.listen(port,()=>{
    console.log("app is running on port |"+port);
})