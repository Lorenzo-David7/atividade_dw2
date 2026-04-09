
import express from 'express'; 


const router = express.Router(); 


router.get("/titulos", (req, res) => {
    const conquistas = [
        { campeonato: "Libertadores", qtd: 1, destaque: "Campeão Invicto" },
        { campeonato: "Brasileirão", qtd: 7, destaque: "Maior campeão da era dos pontos corridos" },
        { campeonato: "Copa do Brasil", qtd: 4, destaque: "Atual Campeão" },
        { campeonato: "Paulistão", qtd: 26, destaque: "Maior campeão" },
        { campeonato: "Super Copa Rei", qtd: 2, destaque: "Atual Campeão" },
        { campeonato: "Mundial", qtd: 2, destaque: "Ultimo Campeão Mundial não europeu" }
    ];
    res.render("titulos", { conquistas });
});
export default router; 