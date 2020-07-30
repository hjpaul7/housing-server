require("dotenv").config();

const express = require("express");
const app = express();
// const section42
const section8 = require("./controllers/section8controller");
const user = require("./controllers/usercontroller");

const sequelize = require("./db");
sequelize.sync();

app.use(express.json());
app.use(require("./middleware/headers"));

app.listen(process.env.PORT, () =>
  console.log(`App is listening on port ${process.env.PORT}`)
);

app.use("/user", user);
app.use("/section8", section8);
app.use(require("./middleware/validate_session"));
