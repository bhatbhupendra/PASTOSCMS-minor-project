require("dotenv").config(); //configuring .env file

const express = require("express"); //get express pakage
const mongoose = require("mongoose"); //get mangooose pakage

//routs require
const userRoutes = require("./routes/user");

//create express app
const app = express(); //start express app

//middleware
app.use(express.json()); //if there is some data need to send to the server then passes attaches it //front end ko data lai json ko format ma lena

app.use((req, res, next) => {
  //just a middleware that concole Path and Method to console
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/user", userRoutes);

//connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     //listen for request
//     app.listen(process.env.PORT, () => {
//       console.log("Listening on port", process.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log("Listening on port", process.env.PORT)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
