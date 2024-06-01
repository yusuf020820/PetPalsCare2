// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const dokterRoutes = require("./routes/dokterRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/dokter", dokterRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
