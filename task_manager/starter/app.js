require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks")

//middleware
app.use(express.json())

app.get("/hello",(req,res)=>{
  res.send("Task manager");
});

app.use("/api/v1/tasks",tasks);




