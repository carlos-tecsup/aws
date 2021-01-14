const express=require('express');
require('dotenv').config();
const {dbConnection}=require('./database/config');
const app = express();
let port=process.env.PORT||3000;
const cors=require('cors');
app.use(cors());
app.use(express.json());
dbConnection();

app.use('/api',require('./routes/persona.route'));
app.use('/api/search',require('./routes/busqueda.route'));

app.listen(port,()=>{``
    console.log( `Corriendo en el puerto:${port}`);
})