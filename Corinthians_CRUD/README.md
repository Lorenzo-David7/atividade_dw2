# Site do Corinthians

Projeto Node.js + Express + EJS + Sequelize, organizado no mesmo estilo do projeto de referencia:

```text
config/
controllers/
models/
public/
views/
index.js
```

## Como rodar

No terminal do VS Code:

```powershell
cd C:\Users\Loren\Documents\Codex\2026-05-27\files-mentioned-by-the-user-ex\EX.DW2\EX.DW2
$env:DB_USER="root"
$env:DB_PASSWORD="sua_senha_do_mysql"
$env:DB_NAME="corinthians_site"
npm start
```

Depois acesse:

```text
http://localhost:3000
```

## Banco de dados

O projeto usa Sequelize. Ao iniciar, ele tenta:

1. criar o banco `corinthians_site` se ele ainda nao existir;
2. conectar no MySQL;
3. criar/verificar as tabelas `torcedores`, `idolos` e `historia`;
4. cadastrar dados iniciais de idolos, historia e um torcedor de exemplo.

Se o MySQL tiver senha, ela precisa ser informada em `DB_PASSWORD`.
