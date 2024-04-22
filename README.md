# Microfrontends com Module Federation e React

Este projeto demonstra a implementação de uma arquitetura de microfrontends utilizando Module Federation e React, onde `app-central` atua como o host principal e carrega os outros microfrontends.

## Tecnologias Implementadas

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Module Federation**: Uma funcionalidade do Webpack que permite um carregamento dinâmico de código entre vários builds de forma independente.
- **NPM**: Gerenciador de pacotes utilizado para gerenciar as dependências do projeto.

## Estrutura do Projeto

O projeto consiste em 4 microfrontends:

- `app-central`: O aplicativo principal que carrega os demais microfrontends.
- `app-header`: O cabeçalho da aplicação, carregado dentro de `app-central`.
- `app-footer`: O rodapé da aplicação, também carregado dentro de `app-central`.
- `app-cards`: A seção que exibe uma lista de cards, carregada dentro de `app-central`.

## Instalação e Execução

Cada microfrontend deve ser instalado e iniciado individualmente. Para isso, siga os passos abaixo para cada um deles:

1. Clone o repositório para sua máquina local:

```bash
git clone https://seu-repositorio.git
```

2. Navegue até o diretório de cada microfrontend:

```bash
cd app-central # Repita para app-header, app-footer e app-cards
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o microfrontend:

```bash
npm start
```

Certifique-se de iniciar todos os microfrontends para que a aplicação funcione corretamente.

## URLs dos Microfrontends

Após iniciados, os microfrontends estarão disponíveis nas seguintes URLs:

- `app-central`: http://localhost:3000
- `app-header`: http://localhost:3001
- `app-footer`: http://localhost:3002
- `app-cards`: http://localhost:3003

## Testes

Para testar a integração dos microfrontends, acesse `app-central` e verifique se os outros microfrontends estão sendo corretamente carregados e renderizados.

---

Desenvolvido por Gustavo Vasconcelos.
```