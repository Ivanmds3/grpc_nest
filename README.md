<!-- GETTING STARTED -->
## Getting Started

Projeto para processo seletivo da HASH

### Prerequisites

Para executar o projeto serão necessários:
  - Acesso anternet
  - Docker instalado e em execução


### Installation

1. Clone o repositório
   ```sh
   git clone https://github.com/Ivanmds3/grpc_nest.git
   ```
2. Acessar a pasta raiz do projeto
   
3. Executar o comando abaixo, o comando irá criar uma imagem docker e executa-la, este processo pode levar alguns minutos.
   ```sh
   docker-compose up -d
   ```
4. Acessar a url local em sua maquina http:localhost/swagger

5. Para utilizar a aplicação seguir o open api(swagger).

<!-- USAGE EXAMPLES -->
## Usage

A aplicação utiliza uma variavel de ambiente com nome DATE_BLACK_FRIDAY que é o dia que ocorrerá a blackfriday
para mudar esta variável caso queira, em sua maquina local editar o arquivo docker-compose com o valor que deseje.
Deverá ser seguido o padrão YYYY-MM-DD. Lembre-se que a aplicação utiliza o horário UTC.