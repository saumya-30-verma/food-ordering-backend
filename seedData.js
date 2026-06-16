const mongoose = require("mongoose");
const Food = require("./models/Food");

mongoose.connect("mongodb+srv://saumyaverma46_db_user:saumya12345@cluster0ne.elnz7vl.mongodb.net/?appName=Cluster0ne");

const foods = [
    {
       name: "Burger",
       price: 199,
       category: "Fast Food",
       description: "Cheesy Veg Burger",
       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
       name: "French Fries",
       price: 99,
       category: "Fast Food",
       description: "Crispy Golden Fries",
       image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
  },
  {
       name: "Momos",
       price: 299,
       category: "Fast Food",
       description: "Steamed Veg Momos",
       image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Pizza",
       price: 349,
       category: "Fast Food",
       description: "Large Margherita",
       image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Hot Dog",
       price: 149,
       category: "Fast Food",
       description: "Chilly 65",
       image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Noodles",
       price: 199,
       category: "Chinese",
       description: "Hakka Noodles",
       image: "https://plus.unsplash.com/premium_photo-1661432479675-595fc5f16219?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Spring Roll",
       price: 149,
       category: "Chinese",
       description: "Crispy Spring Roll",
       image: "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Chocolate Cake",
       price: 249,
       category: "Desert",
       description: "Rich Chocolate Cake",
       image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
       name: "Ice Cream",
       price: 99,
       category: "Desert",
       description: "Vanilla Ice Cream",
       image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
];

const seedFoods = async() => {
    try{
        await Food.deleteMany({});
        await Food.insertMany(foods);

        console.log("Foods inserted successfully");
        mongoose.connection.close();
    } catch (error) {
       console.log(error);
    }
    }
seedFoods();
    