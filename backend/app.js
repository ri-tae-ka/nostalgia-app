const express = require("express");

const app = express();

app.use(express.json());

//routes
const responses = require("./routes/responseRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", responses);
app.use("/api/v1", user);

module.exports = app;
