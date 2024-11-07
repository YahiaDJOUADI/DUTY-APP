const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const dutyRoute = require('./routes/dutyRoute')
app.use(express.json())
app.use(cors())
app.use(dutyRoute)
mongoose.connect("mongodb://127.0.0.1:27017/todo")
app.listen(3000,()=>console.log("started server on http://localhost:3000"))