const express = require('express')
const app = express()
const port = 3000;
const connectDB = require("../backend-node/src/database/db")

const userRoute = require("./src/routes/userRoute");

connectDB();
app.use(express.json())
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});