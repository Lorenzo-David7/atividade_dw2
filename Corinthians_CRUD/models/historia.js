import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Historia = connection.define("historia", {
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

export default Historia;
