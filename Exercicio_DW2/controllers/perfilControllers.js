import express from 'express'; 


const router = express.Router(); 


router.get("/perfil", (req, res) => {
    const usuario = {
        nome: "Lorenzo David ",
        status: "Sócio Fiel",
        desde: "2025"
    };
    res.render("perfil", { usuario });
});

export default router; 