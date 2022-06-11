require("dotenv").config();
const { env } = require("./config/");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const main = async () => {
  app.use("/", require("./routes/"));
  app.listen(env.PORT, () => {
    console.log("Server has been started on port http://localhost:" + env.PORT);
  });
};

main().catch((err) => {
  console.log(err);
});
