import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Torcedor = connection.define("torcedores", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jogador_favorito: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  createdAt: "criado_em",
  updatedAt: false,
});

export default Torcedor;
