import express from "express";
import Historia from "../models/historia.js";
import { menu } from "./homeController.js";

const router = express.Router();

router.get("/historia", async (req, res) => {
  let capitulos = [];
  let erro = null;

  try {
    capitulos = await Historia.findAll({
      order: [["ano", "ASC"]],
    });
  } catch (error) {
    erro = `Erro ao listar historia: ${error.message}`;
  }

  res.render("historia", {
    title: "Historia do Corinthians",
    menu,
    active: "/historia",
    capitulos,
    erro,
  });
});

export default router;
