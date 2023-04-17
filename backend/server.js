const express = require("express")
const connectDb = require("./config/dbConnect")
const dotenv = require('dotenv').config()
const port = 5000

const app = express()

//coonectDb
connectDb()


// app.get("/post", (req, res) => {
//     res.json({message : "Les données"})
// })


//Middleware
app.use(express.json())

app.use(express.urlencoded({extended: false}))




app.use("/post", require("./routes/post.routes"))


//lancer le server
app.listen(port, () =>
console.log("serveur a démarré au port " + port))