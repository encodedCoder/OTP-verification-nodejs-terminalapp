require("dotenv").config();

const config = {
  SMTP_SERVER: process.env.SMTP_SERVER,
  PORT: process.env.SMTP_PORT,
  EMAIL: {
    USERNAME: process.env.EMAIL_USERNAME,
    PASSWORD: process.env.EMAIL_PASSWORD,
  },
  RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  MONGO_URI: process.env.MONGO_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  USERS_COLLECTION: process.env.USERS_COLLECTION,
  TEST_EMAILS: process.env.TEST_EMAILS.split(","),
};

module.exports = config;
