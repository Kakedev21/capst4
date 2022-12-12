const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const port = process.env.PORT || 5000;

//database
const connectDb = require("./config/dataBase");

connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));

const { errorHandler } = require("./middleware/errorMiddleWare");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", require("./routes/userRoute"));

//error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
