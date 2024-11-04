const express = require('express')
const dotenv = require('dotenv')
const db = require('./app-config/db.js');
const { specs, swaggerUi } = require('./app-config/swagger.js');

dotenv.config();

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/v1/question",require('./routers/questionRoutes.js'))




const PORT = process.env.PORT

app.get('/',(req, res)=>{
    res.status(200).send('<h1>Nodejs mysql</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Application running at PORT : ${PORT}`)
})