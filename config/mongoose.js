const mongoose = require('mongoose');
const url = 'mongodb+srv://pankajpurshotam:patel123@issuetracker.b3i7qus.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url ,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
