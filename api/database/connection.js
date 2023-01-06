const mongoose = require("mongoose")

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {

    mongoose.set('strictQuery', true)

    let connString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.lh9ar21.mongodb.net/TheCat`
    
    mongoose.connect(connString)

    console.error(connString)

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao conectar com o mongoDB")
    })

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!")
    })
}

connect();

module.exports = mongoose;