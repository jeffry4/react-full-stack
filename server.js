const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const{Pool}= require('pg')
const pool = new Pool({
    user:'jeffrydelapena',
    password:'',
    host: 'localhost',
    port: 5432,
    database: 'Journal'
}) ;
const app = express();
const PORT = process.env.Port || 8000;

//middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
//maybe thing for auto redirect to homepage?

//routes

//create
app.post('/api/journal', async(req, res)=>{
    try{
        let newEntry = req.body;
        console.log(newEntry)
        let result = await pool.query(`INSERT INTO journal(person_id, topic, post) VALUES(${newEntry.person_id}, '${newEntry.topic}', '${newEntry.post}')`);
        res.status(200).send("congrats you just created a new post")
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})

//read spec
app.get('/api/journal/:id', async(req, res)=>{
    try {
        let {id} = req.params;
        let result = await pool.query(`SELECT * FROM journal WHERE entry_id = ${id}`)
        res.status(200).send(result.rows)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})

//read all
app.get('/api/journal/', async(req, res)=>{
    try {
        
        let result = await pool.query(`SELECT * FROM journal`)
        res.status(200).send(result.rows)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})
//update
app.put('/api/journal/:id', async(req, res)=>{
    try {
        let updatedJournal = req.body;
        let{id} = req.params;
        //let updatedPost = ;
        let result = await pool.query(`UPDATE journal SET person_id = ${updatedJournal.person_id}, topic = '${updatedJournal.topic}', post = '${updatedJournal.post}' WHERE entry_id = ${id}`)
        res.status(200).send(`congrats you just updated post #${id}`)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})
//delete
app.delete('/api/journal/:id', async(req, res)=>{
    try {
        let {id}= req.params
        let result = await pool.query(`DELETE FROM journal WHERE entry_id = ${id}`)
        res.status(200).send(`congrats ENTRY#${id} was deleted`)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})

//error if no route hits
app.use((req, res)=>{
    res.status(404).send('Page not found or you went somewhere weird? but it tried at least')
})
//listen 
app.listen(PORT, ()=>{console.log('listening on port:' + PORT)})