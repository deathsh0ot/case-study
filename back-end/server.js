const express = require("express");
const cors = require("cors");

// connecting to mongoDB
require("dotenv").config();
require("./config/database").connect();

const app = express();

// allowing our frontend to consume the APIs
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/data")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
