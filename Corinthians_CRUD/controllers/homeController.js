import express from "express";
import Historia from "../models/historia.js";
import Idolo from "../models/idolo.js";
import Torcedor from "../models/torcedor.js";

const router = express.Router();

const menu = [
  { href: "/", label: "Inicio" },
  { href: "/cadastro", label: "Cadastro" },
  { href: "/idolos", label: "Idolos" },
  { href: "/historia", label: "Historia" },
];

router.get("/", async (req, res) => {
  let numeros = {
    torcedores: 0,
    idolos: 0,
    capitulos: 0,
  };
  let erro = null;

  try {
    numeros = {
      torcedores: await Torcedor.count(),
      idolos: await Idolo.count(),
      capitulos: await Historia.count(),
    };
  } catch (error) {
    erro = `Erro ao buscar resumo: ${error.message}`;
  }

  res.render("index", {
    title: "Corinthians",
    menu,
    active: "/",
    numeros,
    erro,
  });
});

export { menu };
export default router;
