const cors = require('cors');
var express=require("express");
var app=express();
const authRoutes=require("./routes/auth");
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.listen(5000, () => {
    console.log("Server running on port 5000");
  });