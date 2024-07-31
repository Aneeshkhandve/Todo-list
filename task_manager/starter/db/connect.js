const mongoose = require("mongoose");
const connectionString = 'mongodb+srv://khandveaneesh:aKwUDXNyoODs0n7k@nodeexpressprojects.2t6mqoe.mongodb.net/'

mongoose.connect(connectionString)
.then(()=>console.log("Connected to db..."))
.catch((err) => console.log(err));
