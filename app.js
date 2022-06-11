require("dotenv").config();
const { env_config: env } = require("./config/");
const express = require("express");
const app = express();

const main = async () => {
  app.use("/", require("./routes/"));
};
app.listen(env.PORT, () => {
  console.log("Server has been started on port http://localhost:" + env.PORT);
});

main().catch((err) => {
  console.log(err);
});
