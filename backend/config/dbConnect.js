const mongoose = require('mongoose')

const connectDb = async () =>{
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connexion établie avec Mongo");
    } catch (error) {
        console.log(error);
        process.exit()
    }
}

module.exports = connectDb