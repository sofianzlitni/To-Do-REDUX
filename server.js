// importation
const express = require("express") ;
const app = express();


// dotenv
require("dotenv").config();
const PORT = process.env.PORT;

// middleware
app.use(express.json())


// routes
app.use('/api/user' , require ('./routes/user'))
app.use('/api/task' , require ('./routes/task'))




// database
const connectDB = require ('./config/connectDB')
connectDB();

// testing
app.get('/', (req, res) => {
    res.send('Hello from to-do!')
})



// error catching
app.listen(PORT , error =>{
    
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
}) 
