# Microfrontends com Module Federation e React - Gustavo Vasconcelos 🚀

Este projeto demonstra a implementação de uma arquitetura de microfrontends utilizando Module Federation e React, onde `app-central` atua como o host principal e carrega os outros microfrontends.

## 🛠 Tecnologias Implementadas

 ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white) Uma biblioteca JavaScript para construir interfaces de usuário.
- ![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white) Module Federation: Uma funcionalidade do Webpack que permite um carregamento dinâmico de código entre vários builds de forma independente.
- ![NPM](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm) Gerenciador de pacotes utilizado para gerenciar as dependências do projeto.

## 📂 Estrutura do Projeto

O projeto consiste em 4 microfrontends:

- `app-central`: O aplicativo principal que carrega os demais microfrontends.
- `app-header`: O cabeçalho da aplicação, carregado dentro de `app-central`.
- `app-footer`: O rodapé da aplicação, também carregado dentro de `app-central`.
- `app-cards`: A seção que exibe uma lista de cards, carregada dentro de `app-central`.

## 🚀 Instalação e Execução

Para instalar e iniciar cada microfrontend:

1. Clone o repositório:
   ```bash
   git clone https://github.com/sasgustav/Microfrontend-react-vr-gustavo-vasconcelos.git
   ```

2. Instale as dependências e inicie cada aplicativo:
   ```bash
   cd app-central # E o mesmo para app-header, app-footer, e app-cards
   npm install
   npm start
   ```

## 🌐 URLs dos Microfrontends

- `app-central`: [http://localhost:3000](http://localhost:3000)
- `app-header`: [http://localhost:3001](http://localhost:3001)
- `app-footer`: [http://localhost:3002](http://localhost:3002)
- `app-cards`: [http://localhost:3003](http://localhost:3003)

## 🧪 Testes

Para testar a integração dos microfrontends, acesse `app-central` e verifique se os outros estão sendo corretamente carregados e renderizados.

---

💻 Desenvolvido por [Gustavo Vasconcelos](https://github.com/sasgustav)
```