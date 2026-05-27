import express from "express";
import Torcedor from "../models/torcedor.js";
import { menu } from "./homeController.js";

const router = express.Router();

router.get("/cadastro", async (req, res) => {
  let torcedores = [];
  let erro = null;

  try {
    torcedores = await Torcedor.findAll({
      order: [["id", "DESC"]],
    });
  } catch (error) {
    erro = `Erro ao listar torcedores: ${error.message}`;
  }

  res.render("cadastro", {
    title: "Cadastro de torcedores",
    menu,
    active: "/cadastro",
    torcedores,
    erro,
    sucesso: req.query.sucesso === "1",
  });
});

async function cadastrarTorcedor(req, res) {
  const { nome, email, cidade, jogador_favorito } = req.body;

  try {
    await Torcedor.create({
      nome,
      email,
      cidade,
      jogador_favorito: jogador_favorito || null,
    });

    res.redirect("/cadastro?sucesso=1");
  } catch (error) {
    const torcedores = await Torcedor.findAll({
      order: [["id", "DESC"]],
    });

    res.render("cadastro", {
      title: "Cadastro de torcedores",
      menu,
      active: "/cadastro",
      torcedores,
      erro: `Erro ao cadastrar torcedor: ${error.message}`,
      sucesso: false,
    });
  }
}

router.post("/cadastro", cadastrarTorcedor);
router.post("/cadastro/new", cadastrarTorcedor);

export default router;
