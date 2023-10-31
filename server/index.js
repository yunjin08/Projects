const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://jeddonaire08:merntutorial@cluster0.jiozjvn.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.get("/getUsers/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findById(userId);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.post("/createUsers", async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.put("/updateUser/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(userId, {
      name: req.body.name,
      age: req.body.age,
      username: req.body.username,
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await UserModel.findByIdAndDelete(userId);
    res.json(res);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3001, () => {
  console.log("Server runs at local port 3001");
});
