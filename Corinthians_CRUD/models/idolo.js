import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Idolo = connection.define("idolos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  posicao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  periodo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  ordem: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  timestamps: false,
});

export default Idolo;
