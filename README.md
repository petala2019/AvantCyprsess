✅ Testes Automatizados - Avantsoft (Desafio QE)

Este repositório contém uma suíte de testes end-to-end utilizando Cypress para validar funcionalidades do sistema da Avantsoft, como parte do desafio para a vaga de Quality Engineering (QE).

🌐 URL da Aplicação

https://qe-test.recrutamento.avantsoft.com.br

📋 Funcionalidades Testadas
🔐 Login
Cenário	Descrição
✅ Login com sucesso	Realiza login com e-mail e senha válidos.
❌ Login com credenciais inválidas	Tenta acessar com dados incorretos e valida mensagem de erro.
🚗 Carros
Cenário	Descrição
🚘 Validação de carro alugado	Verifica se o primeiro carro listado está com o status "Alugado".
🔧 Validação de carro em manutenção	Verifica se o quinto carro está com o status "Manutenção".
🛠️ Tecnologias Utilizadas

Cypress
 - Testes automatizados E2E

JavaScript (ES6)

Node.js

. Rodar os Testes

Modo interativo (com interface):

npx cypress open


Modo headless (linha de comando):

npx cypress run
