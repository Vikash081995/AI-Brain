const express = require("express");
const bodyparser = require("body-parser");
const placeRoutes = require("./routes/places-routes");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
const adminRoutes = require("./routes/admin");

const PORT = process.env.PORT || 3000;

//connect to DB
connectDB();

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/admin',adminRoutes)
// routes
app.use("/api/v1/places", placeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

mongoose.connection.once("open", () => {
  console.log("Cnnected to Mongodb");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Start server
