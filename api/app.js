const express = require("express")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');

require("dotenv").config()

var app = express();
app.use(express.json())

app.use(cors())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const AuthRegisterUserRoutes = require("./routes/AuthRegisterUserRoutes") 
const LoginRoutes = require("./routes/LoginRoutes")
const CatsRoutes = require("./routes/CatsRoutes")
const SetupRoutes = require("./routes/SetupRoutes")

app.use(AuthRegisterUserRoutes)
app.use(LoginRoutes)
app.use(CatsRoutes)
app.use(SetupRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta: http://localhost:${port}/swagger`)
})

require("./database/connection")