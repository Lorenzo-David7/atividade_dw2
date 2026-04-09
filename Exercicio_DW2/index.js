import express from 'express';

// importando o Controller de cliente (onde estão as rotas)
import elencoController from "./controllers/elencoControllers.js"
import perfilController from "./controllers/perfilControllers.js"
import titulosController from "./controllers/titulosControllers.js"
// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// ativando o uso das rotas
app.use("/",elencoController)
app.use("/",perfilController)
app.use("/",titulosController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})