<!-- GETTING STARTED -->
## Getting Started

Projeto para processo seletivo da HASH

### Prerequisites

Para executar o projeto serão necessários:
  - Acesso a internet
  - Docker instalado e em execução


### Installation

1. Clone ou baixe o repositório
   ```sh
   git clone https://github.com/Ivanmds3/grpc_nest.git
   ```
2. Acessar a pasta raiz do projeto
   
3. Executar o comando abaixo, o comando irá criar uma imagem docker e executa-la, este processo poderá levar alguns minutos.
   ```sh
   docker-compose up -d
   ```
4. Acessar a url local em sua maquina http://localhost/swagger

5. Para utilizar a aplicação seguir o open api(swagger).

<!-- USAGE EXAMPLES -->
## Obs

A aplicação utiliza a variável de ambiente DATE_BLACK_FRIDAY com valor do dia da blackfriday.
Caso deseje mudar o dia da blackfriday deverá ser editado a mesma para o dia desejado.
O valor da variável deverá seguir o padrão YYYY-MM-DD e não esqueça que a aplicação utiliza o horário UTC.