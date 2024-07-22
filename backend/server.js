// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Inside try block");
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const isMatch = password === user?.password;
    if (!isMatch) {
      console.log(user);
      return res.status(400).send("Invalid credentials");
    }
    res.status(200).send("Login successful");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
