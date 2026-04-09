import express from 'express'; 


const router = express.Router(); 


router.get("/elenco", (req, res) => {
        const idolos = [
    { 
        nome: "Wladimir", 
        posicao: "Lateral", 
        detalhe: "O jogador com mais partidas na história do clube, com 806 jogos.",
        foto: "/imgs/Wladimir.jpg" 
    },
      
        { nome: "Cássio", 
          posicao: "Goleiro", 
          detalhe: "Fundamental nas conquistas da Libertadores e Mundial de 2012, sendo o jogador com mais títulos na história do clube.", 
          foto: "/imgs/Cassio.jpg" },


        { nome: "Craque Neto", 
          posicao: "Meia", 
          detalhe: "Craque do primeiro título Brasileiro em 1990, ídolo máximo para a geração da época.", 
          foto: "/imgs/CraqueNeto.jpg" },

        { nome: "Sócrates", 
          posicao: "Meia", 
          detalhe: "Líder da Democracia Corintiana nos anos 80, ícone técnico e político.", 
          foto: "/imgs/Socrates.webp" },

        { nome: "Marcelinho Carioca", 
          posicao: "Meia", 
          detalhe: " Conhecido como Pé de Anjo, é o maior vencedor de títulos e referência em cobranças de falta, acumulando 206 gols.", 
          foto: "/imgs/MarcelinhoCarioca.webp" },

          { nome: "Basilio", 
          posicao: "Meia", 
          detalhe: " Herói do título Paulista de 1977, que encerrou um jejum de 23 anos. ", 
          foto: "/imgs/Basilio.jpg" }
    ];
    res.render("elenco", { idolos });
});
export default router; 

