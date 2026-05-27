import express from "express";
import Idolo from "../models/idolo.js";
import { menu } from "./homeController.js";

const router = express.Router();

router.get("/idolos", async (req, res) => {
  let idolos = [];
  let erro = null;

  try {
    idolos = await Idolo.findAll({
      order: [["ordem", "ASC"], ["nome", "ASC"]],
    });
  } catch (error) {
    erro = `Erro ao listar idolos: ${error.message}`;
  }

  res.render("idolos", {
    title: "Idolos do Corinthians",
    menu,
    active: "/idolos",
    idolos,
    erro,
  });
});

export default router;
