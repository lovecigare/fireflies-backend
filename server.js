const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendx = require("./api/sendx");

const app = express();

// Set cors
app.use(
  cors({
    origin: "*",
  })
);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use Routes
app.use("/api/sendx", sendx);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: `Server is running on ${port} for GVV.` });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
