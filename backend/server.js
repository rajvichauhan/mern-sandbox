const cors = require('cors');
var express = require("express");
var app = express();
const authRoutes = require("./routes/auth");
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yourdbname", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
const User = require('./models/User');

// Example usage to trigger collection creation
const testUser = new User({ username: 'rajvi', password: '123' });
testUser.save().then(() => console.log("User saved"));