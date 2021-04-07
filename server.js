const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const{Pool}= require('pg')
const pool = new Pool({
    user:'jeffrydelapena',
    password:'',
    host: 'localhost',
    port: 5432,
    database: ''//name of db
}) ;
const app = express();
const Port = process.env.Port || 8000;

//middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
//maybe thing for auto redirect to homepage?

//routes

//create

//read spec

//read all

//update

//delete

//error if no route hits
app.use((req, res)=>{
    res.status(404).send('Page not found or you went somewhere weird? but it tried at least')
})
//listen 
app.listen(PORT, ()=>{console.log('listening on port:' + PORT)})