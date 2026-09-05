# 👟 Senna Store

E-commerce de calçados desenvolvido como projeto de portfólio, com foco em experiência do usuário, interface moderna e integração entre frontend, backend e banco de dados.

**Senna Store** é uma aplicação web de e-commerce desenvolvida do zero, simulando uma loja virtual de calçados com catálogo de produtos, busca, carrinho de compras, autenticação de usuários, checkout e gerenciamento de pedidos.

O projeto foi desenvolvido com uma arquitetura separando **frontend** e **backend**, utilizando uma API REST para comunicação com o banco de dados PostgreSQL.

# 📸 Preview
<img width="1366" height="778" alt="homeSenna" src="https://github.com/user-attachments/assets/68b03bb5-0be1-4a2a-a9d0-a1d5b6bd2283" />
<img width="1370" height="683" alt="shopSenna" src="https://github.com/user-attachments/assets/5d613b9e-4e31-4dbc-96db-18f443fd06f5" />
<img width="1365" height="701" alt="productSenna" src="https://github.com/user-attachments/assets/ea36ab7f-5ebb-4c7b-ba3c-f2b41f2e705e" />
<img width="509" height="490" alt="LogoSennaStore 1" src="https://github.com/user-attachments/assets/a5314178-014a-48e3-82b9-d9905c12e9e8" />


# 🛍️ Sobre o projeto
O Senna Store foi desenvolvido com o objetivo de colocar em prática conceitos de **desenvolvimento web moderno**, desde a construção da interface até a criação de uma API e integração com banco de dados.

A aplicação possui uma experiência de compra completa, permitindo ao usuário:

- navegar pelo catálogo;
- pesquisar produtos;
- visualizar detalhes dos produtos;
- selecionar tamanho e quantidade;
- adicionar produtos ao carrinho;
- utilizar a opção de compra imediata;
- escolher opções de entrega;
- selecionar forma de pagamento;
- criar uma conta;
- realizar login e logout;
- visualizar sua conta;
- consultar seus pedidos;
- finalizar uma compra;
- receber uma confirmação do pedido.

O projeto também utiliza animações e transições para tornar a navegação mais fluida e próxima da experiência de um e-commerce real.

# ✨ Funcionalidades
## 🛒 E-commerce

- Catálogo de produtos
- Categorias de produtos
- Página individual de produto
- Busca de produtos
- Paginação
- Seleção de tamanho
- Controle de quantidade
- Carrinho de compras
- Compra rápida com "Comprar agora"
- Cálculo de subtotal e total
- Opções de frete
- Checkout
- Seleção de método de pagamento
- Confirmação de pedido

## 👤 Autenticação

- Cadastro de usuários
- Login
- Logout
- Autenticação utilizando JWT
- Rotas protegidas
- Persistência da sessão
- Área da conta
- Consulta de pedidos do usuário

## 🎨 Interface e experiência

- Design responsivo
- Navegação para desktop e mobile
- Menu mobile
- Menu de conta
- Painel de pesquisa
- Sistema de feedback/toasts
- Preloader
- Loading de páginas
- Scroll suave
- Animações com GSAP
- Transições entre elementos
- Estados de carregamento e conteúdo vazio

## 📦 Pedidos

- Criação de pedidos através da API
- Associação do pedido ao usuário autenticado
- Registro dos produtos comprados
- Quantidade e tamanho dos produtos
- Consulta dos pedidos realizados
- Tela de confirmação após a compra

# 🧩 Tecnologia
<p>Frontend</p>

| Tecnologia | Utilização |
| --- | --- |
React	| Construção da interface
Vite	| Ambiente de desenvolvimento e build
React Router |	Roteamento da aplicação
JavaScript |	Lógica da aplicação
HTML5	| Estrutura
CSS3	| Estilização e responsividade
GSAP |	Animações
Lenis	| Scroll suave
React Icons | 	Ícones da interface
Context API |	Gerenciamento de estado

<p>Backend</p>

| Tecnologia | Utilização |
| --- | --- |
Python | Linguagem do backend
FastAPI |	Construção da API REST
SQLModel / SQLAlchemy	| ORM e comunicação com banco
PostgreSQL |	Banco de dados
JWT |	Autenticação
Argon2 |	Hash seguro de senhas

# 🏗️ Arquitetura
O projeto é dividido em duas partes principais:

```text
Senna Store
│
├── Frontend
│     ├── React
│     ├── ViteS
│     ├── React Router
│     ├── Context API
│     ├── GSAP
│     └── Lenis
│
└── Backend
      ├── FastAPI
      ├── Autenticação JWT
      ├── SQLModel / SQLAlchemy
      └── PostgreSQL
```
O frontend se comunica com o backend através de requisições HTTP para a API REST.

```text
React 
  │ 
  │ HTTP / JSON 
  ▼ 
FastAPI 
  │ 
  │ ORM 
  ▼ 
PostgreSQL
```

# 📁 Estrutura do projeto
```text
senna-store/
│
├── backend/
│   ├── app/
│   │ ├── models/
│   │ ├── routers/
│   │ ├── schemas/
│   │ ├── services/
│   │ ├── database.py
│   │ └── main.py
│   │
│   └── requirements.txt
│
├── public/
│
├── src/
│   ├── Animations/
│   ├── Routes/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```
# 🚀 Como executar o projeto
## 1. Pré-requisitos
Antes de iniciar, certifique-se de possuir instalado:
- Node.js
- Python
- PostgreSQL
- Git

## 2. Clone o repositório
git clone https://github.com/hsenadasilva132/senna-store.git

Entre na pasta:

cd senna-store

# 💻 Frontend
## 3. Instale as dependências
npm install

## 4. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto:

VITE_API_URL=http://127.0.0.1:8000

O endereço deve apontar para a API do backend em execução.

## 5. Execute o frontend
npm run dev

O Vite disponibilizará a aplicação no endereço informado no terminal, normalmente:

http://localhost:5173

# 🐍 Backend
## 6. Entre na pasta do backend
cd backend

## 7. Crie um ambiente virtual
Windows: 
python -m venv .venv

ative o ambiente: 
.venv/Scripts/activate

Linux/macOS:
python3 -m venv .venv 
source .venv/bin/activate

## 8. Instale as dependências
pip install -r requirements.txt

## 9. Configure o PostgreSQL
Crie um banco de dados PostgreSQL para o projeto e configure a variável de conexão utilizada pelo backend.

Exemplo:
DATABASE_URL=postgresql://usuario:senha@localhost:5432/senna_store

## 10. Execute a API
A partir da pasta backend:

uvicorn app.main:app --reload

A API ficará disponível normalmente em:

http://127.0.0.1:8000

A documentação interativa do FastAPI pode ser acessada em:

http://127.0.0.1:8000/docs

# 🔐 Segurança
O projeto utiliza autenticação baseada em JWT (JSON Web Token).

As senhas dos usuários não são armazenadas diretamente no banco de dados. Elas passam por processo de hash antes do armazenamento.

Além disso:
- arquivos .env não são versionados;
- credenciais não devem ser inseridas no código;
- tokens de autenticação são utilizados para acessar endpoints protegidos;
- o frontend utiliza o token armazenado localmente para autenticar requisições.

# 📌 Status do projeto
🟢 Em desenvolvimento

O fluxo principal de e-commerce já está implementado, incluindo catálogo, autenticação, carrinho, checkout, pedidos e integração com backend e banco de dados.

Algumas funcionalidades adicionais permanecem planejadas para versões futuras.

# 🔮 Próximas melhorias
Página detalhada do pedido

Recuperação de senha

Configurações de conta e segurança

Integração com gateway de pagamento real

Sistema de estoque

Painel administrativo

Deploy completo da aplicação

Melhorias de SEO

Testes automatizados

# 🎯 Objetivo do projeto
O Senna Store foi desenvolvido como projeto de estudo e portfólio, com o objetivo de demonstrar conhecimentos em:

- desenvolvimento frontend;
- desenvolvimento backend;
- criação e consumo de APIs REST;
- autenticação;
- banco de dados relacionais;
- gerenciamento de estado;
- responsividade;
- UX/UI;
- animações;
- Git e GitHub;
- integração entre diferentes tecnologias.

# 👨🏽‍💻 Autor
**Henrique Sena da Silva**
Desenvolvedor formado, com foco em desenvolvimento web e construção de aplicações utilizando JavaScript, React, Python e tecnologias relacionadas.
## 🔗 Links
- GitHub: https://github.com/hsenadasilva132
- LinkedIn: https://www.linkedin.com/in/henrique-sena-da-silva/

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
