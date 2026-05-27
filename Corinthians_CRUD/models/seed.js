import Historia from "./historia.js";
import Idolo from "./idolo.js";
import Torcedor from "./torcedor.js";

async function seedDatabase() {
  const totalIdolos = await Idolo.count();
  if (totalIdolos === 0) {
    await Idolo.bulkCreate([
      { nome: "Socrates", posicao: "Meia", periodo: "1978-1984", descricao: "Simbolo de classe, lideranca e da Democracia Corinthiana. Marcou uma geracao dentro e fora de campo.", ordem: 1 },
      { nome: "Rivelino", posicao: "Meia", periodo: "1965-1974", descricao: "Dono de tecnica refinada e chute forte, ficou conhecido como um dos maiores camisas 10 da historia do futebol brasileiro.", ordem: 2 },
      { nome: "Casagrande", posicao: "Atacante", periodo: "1982-1986", descricao: "Atacante decisivo dos anos 1980, fez parte da Democracia Corinthiana e virou simbolo de identificacao com a Fiel.", ordem: 3 },
      { nome: "Marcelinho Carioca", posicao: "Meia", periodo: "1994-2001", descricao: "O Pe de Anjo marcou gols historicos, conquistou titulos importantes e virou um dos maiores artilheiros do clube.", ordem: 4 },
      { nome: "Neto", posicao: "Meia", periodo: "1989-1993", descricao: "Craque do titulo brasileiro de 1990, liderou o time com talento, personalidade e cobrancas de falta memoraveis.", ordem: 5 },
      { nome: "Cassio", posicao: "Goleiro", periodo: "2012-2024", descricao: "Heroi da Libertadores e do Mundial de 2012, tornou-se um dos goleiros mais vitoriosos e respeitados da historia corinthiana.", ordem: 6 },
    ]);
  }

  const totalHistoria = await Historia.count();
  if (totalHistoria === 0) {
    await Historia.bulkCreate([
      { ano: 1910, titulo: "Fundacao", descricao: "O Sport Club Corinthians Paulista foi fundado em 1 de setembro de 1910 por operarios do bairro do Bom Retiro, em Sao Paulo." },
      { ano: 1914, titulo: "Primeiro Campeonato Paulista", descricao: "O Corinthians conquistou seu primeiro titulo paulista e comecou a formar sua identidade popular." },
      { ano: 1977, titulo: "Fim da fila", descricao: "O titulo paulista de 1977 encerrou um jejum marcante e se tornou uma das conquistas mais emocionantes para a Fiel." },
      { ano: 1990, titulo: "Primeiro Brasileiro", descricao: "Comandado por Neto dentro de campo, o Corinthians venceu seu primeiro Campeonato Brasileiro." },
      { ano: 2000, titulo: "Mundial de Clubes", descricao: "O clube venceu o primeiro Mundial de Clubes da FIFA, disputado no Brasil." },
      { ano: 2012, titulo: "Libertadores e Mundial", descricao: "Em uma das temporadas mais importantes da historia, o Corinthians conquistou a Libertadores invicto e depois venceu o Mundial no Japao." },
    ]);
  }

  const totalTorcedores = await Torcedor.count();
  if (totalTorcedores === 0) {
    await Torcedor.create({
      nome: "Fiel Exemplo",
      email: "fiel@corinthians.com",
      cidade: "Sao Paulo",
      jogador_favorito: "Socrates",
    });
  }
}

export default seedDatabase;
