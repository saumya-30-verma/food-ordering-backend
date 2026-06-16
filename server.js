const Food = require("./models/Food")

const cors = require("cors");

const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://saumyaverma46_db_user:saumya12345@cluster0ne.elnz7vl.mongodb.net/?appName=Cluster0ne");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

let foods = [
  {
     id: 1,
            name:"Burger",
            price: 199
        },

        {
             id: 2,
            name:"Pizza",
            price: 299
        }
  
];

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/foods", async (req, res) => {
  const foods = await Food.find();
    res.json(foods);
});

app.get("/foods/:id", (req, res) => {
  const foodId = req.params.id;
  const food = foods.find((item) => item.id == foodId);
  res.json(food);
});

app.get("/test", async (req, res) => {
  const totalFoods = await Food.countDocuments();
  const fastFood = await Food.countDocuments({
    category: "Fast Food"
  });
  const chinese = await Food.countDocuments({
    category: "Chinese"
  });
  const desert = await Food.countDocuments({
    category: "Desert"
  });
  res.json({
    totalFoods,
    fastFood,
    chinese,
    desert
  });
});

app.delete("/deletefood/:id", async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.send("Food Deleted");
})

app.post("/foods", async (req, res) => {
    const newFood = new Food(req.body);
    await newFood.save();
   
     res.json("newFood")
});

app.put("/foods/:id", async(req, res) => {
  const updateFood = await Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  );

  res.send(updateFood);
});

app.listen(5000, () => {
  console.log("Server started");
});
