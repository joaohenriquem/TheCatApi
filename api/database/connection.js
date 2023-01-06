const mongoose = require("mongoose")

let dbUser = process.env.DB_USER ?? 'acesso_dados'
const dbPassword = process.env.DB_PASS ?? 'MBg5pYhiLo8F7C2U'

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