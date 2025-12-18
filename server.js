const express = require("express");
const cors = require("cors");
require("./db");

const productRoutes = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CraftoCart Backend is Running Successfully 🚀");
});

app.use("/api/products", productRoutes); // 👈 REQUIRED

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
