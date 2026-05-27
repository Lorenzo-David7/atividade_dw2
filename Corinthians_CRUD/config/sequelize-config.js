import Sequelize from "sequelize";

const databaseName = process.env.DB_NAME || "corinthians_site";

const databaseConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
};

const connection = new Sequelize({
  dialect: "mysql",
  host: databaseConfig.host,
  username: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseName,
  timezone: "-03:00",
  logging: false,
});

export { databaseConfig, databaseName };
export default connection;
