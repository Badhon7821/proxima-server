require("dotenv").config();

const express = require("express");
const ProjectRoutes = require("./routes/ProjectRoutes");

//express app
const app = express();

//port
const port = process.env.PORT || 4000;

// middleware
app.use(express.json()); // body parser
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", ProjectRoutes);

//listen for request
app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});
