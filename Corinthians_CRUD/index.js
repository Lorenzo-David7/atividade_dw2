import express from "express";
import mysql from "mysql2/promise";

import connection, { databaseConfig, databaseName } from "./config/sequelize-config.js";
import homeController from "./controllers/homeController.js";
import torcedoresController from "./controllers/torcedoresController.js";
import idolosController from "./controllers/idolosController.js";
import historiaController from "./controllers/historiaController.js";
import seedDatabase from "./models/seed.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function createDatabaseIfNeeded() {
  const serverConnection = await mysql.createConnection(databaseConfig);
  await serverConnection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
  await serverConnection.end();
}

async function startServer() {
  try {
    await createDatabaseIfNeeded();
    console.log(`Banco de dados ${databaseName} criado/verificado com sucesso.`);

    await connection.authenticate();
    console.log("Conexao com o banco de dados feita com sucesso.");

    await connection.sync({ force: false });
    console.log("Tabelas criadas/verificadas com sucesso.");

    await seedDatabase();
    console.log("Dados iniciais criados/verificados com sucesso.");
  } catch (error) {
    console.log("Erro ao preparar o banco de dados: " + error.message);
  }

  app.use("/", homeController);
  app.use("/", torcedoresController);
  app.use("/", idolosController);
  app.use("/", historiaController);

  app.listen(port, () => {
    console.log(`Site do Corinthians rodando em http://localhost:${port}`);
  });
}

startServer();
