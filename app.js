require ("dotenv").config();

const dbConnect = require('./config/mongo')
const express = require ("express");
const cors = require("cors");
const app = express();
app.use(cors());

//const port = process.env.PORT || 3000;



/*app.listen (port,()=>{
    console.log(`la app esta lista por 
        http://localhost:${port}`);
})*/

dbConnect ();