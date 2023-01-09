require("dotenv").config();
require("express-async-errors"); // no need to worry about try , catch block

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const bookRouter = require("./routes/books");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send(`
        <h1>Store Api</h1>
        <a href="  " >products routes</a>
    `);
});

app.use("/api/v1/books", bookRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);
    console.log("DB Connected ...");
    app.listen(port, console.log(`Server is listening port ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
