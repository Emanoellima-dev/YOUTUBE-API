# YOUTUBE-API
Este é um projeto backend que utiliza a API do YouTube para buscar vídeos de canais específicos e ordená-los de diversas formas. É desenvolvido em Node.js com Express.

## Funcionalidades

- Buscar vídeos de um canal pelo nome.
- Ordenar vídeos por diferentes critérios:
  - Mais recentes (`date`)
  - Mais relevantes (`relevance`)
  - Ordem alfabética pelo título (`title`)                                                                  - Mais visualizados (`viewCount`)
  - Mais bem avaliados(`rating`)                                                                          - Retornar dados como título, URL do vídeo e data de publicação.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Axios**                                                                                               - **YouTube Data API v3**

## Endpoints
| método | endpoint | descrição |
|--------|----------|-----------|
| GET | `/videos/nome-do-canal/date` | busca os video mais recentes do canal |
| GET | `/videos/nome-do-canal/relevance` | busca os video mais relevantes do canal |
| GET | `/videos/nome-do-canal/title` | ordenar por ordem alfabética |
| GET | `/videos/nome-do-canal/viewCount` | busca os video mais visualizados do canal |
| GET | `/videos/nome-do-canal/rating` | busca os video mais bem avaliados |

## Como Rodar o Projeto

1. Clone este repositório:
   git clone https://github.com/Emanoellima-dev/YOUTUBE-API.git.
depois entre na pasta: cd YOUTUBE-API

3. Instale as dependencias:
 npm install

4. Crie um arquivo .env e adicione sua chave da API do YouTube:
API_KEY=SUA_CHAVE_AQUI

5. Iniciar o servidor:
node Server.js

Após isso você poder acessar o servidor em http://localhost:3000

## Observações
Este projeto foi desenvolvido com fins educacionais e não aceita contribuições externas.
Certifique-se de respeitar os limites de uso da YouTube Data API v3 ao rodar o projeto.
