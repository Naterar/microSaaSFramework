const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");

dotenv.config({ path: "./.env" }); // Adjusted to load .env file

const apiRouter = require("./routes/apiRoutes");

const app = express();

app.use(cors()); // Apply CORS to all routes
app.options("*", cors());

app.use(
  helmet({
    frameguard: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(xss());

app.use(express.json({ limit: "100kb" }));

const port = process.env.PORT || 4000;

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`); // Corrected syntax for template literal
});
