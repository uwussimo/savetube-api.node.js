const env_config = {
  PORT: process.env.PORT,
  URL:
    process.env.NODE_ENV === "production"
      ? process.env.PROD_URL
      : "http://localhost:" + process.env.PORT,
};

module.exports = env_config;
