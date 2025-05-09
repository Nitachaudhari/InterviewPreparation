require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get('/health',(req,res)=>{
    res.send('Interview preparation Api is working')
})
app.use('/api/questions', require('./routes/questionRoutes'));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
