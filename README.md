# Projeto de Clima em Tempo Real

## Descrição
Este projeto é uma aplicação web que fornece informações em tempo real sobre o clima da cidade de Osasco, Brasil, utilizando a API do OpenWeather. O aplicativo foi desenvolvido com Node.js no backend e React no frontend.

## Funcionalidades
- Consulta de dados climáticos em tempo real.
- Exibição de temperatura, umidade, condições climáticas e muito mais.
- Interface amigável e responsiva.

## Estrutura do Projeto
```plaintext
.
├── backend
│   ├── node_modules
│   ├── .env
│   ├── package.json
│   └── src
│       └── app.js
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env
```
## Tecnologias Utilizadas
- Backend: Node.js, Express, Axios
- Frontend: React, Vite
- API: OpenWeather

  ## Participantes

- Arthur Amaral: RM556951
- Caue Garaude: RM554838 - Turma 1ESPV noturno
- Luiz Henrique: RM556001
- Rafael Jango: RM555297
- Rafael Bocchi: RM557603
  
## Pré-requisitos
Node.js (v14 ou superior)
npm (v6 ou superior)

## Instalação
1. **Clonando o Repositório**
```bash
git clone https://github.com/Caue-Garaude/seu-repositorio.git
cd seu-repositorio
```
2. **Configurando o Backend**
1. Acesse a pasta do backend:
```bash
cd backend
```
2. Instale as dependências:
```bash
npm install
```
3. Crie um arquivo .env na pasta backend com a seguinte configuração:
```plaintext
OPENWEATHER_API_KEY=sua-chave-da-api
```
4. Inicie o servidor:
```bash
node src/app.js
```
3. **Configurando o Frontend**
1. Acesse a pasta do frontend:
```bash
cd ../frontend
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o aplicativo React:
```bash
npm run dev
```
## Como Usar
Acesse http://localhost:3000 no seu navegador para visualizar o aplicativo.
A consulta do clima será feita automaticamente ao carregar a página.

## Contribuições
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas:

1. Fork o repositório.
2. Crie uma nova branch: git checkout -b feature/nome-da-sua-feature.
3. Faça suas alterações e commit: git commit -m 'Adicionei uma nova feature'.
4. Envie para o repositório: git push origin feature/nome-da-sua-feature.
5. Abra um Pull Request.

# Licença MIT

Copyright (c) [2024] [Caue Garaude]

Permissão é concedida, gratuitamente, a qualquer pessoa que obter uma cópia deste software e arquivos de documentação associados (o "Software"), para lidar no Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, fundir, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e para permitir que pessoas a quem o Software é fornecido o façam, sob as seguintes condições:

- O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUM CASO A AUTORIA OU OS TITULARES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUAISQUER RECLAMAÇÕES, DANOS OU OUTRAS RESPONSABILIDADES, SEJAM EM UMA AÇÃO DE CONTRATO, AGRAVO OU OUTRA AÇÃO, DECORRENTES DE, FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTROS NEGÓCIOS NO SOFTWARE.



## Agradecimentos

Gostaria de agradecer a todas as pessoas e recursos que tornaram este projeto possível:

- **OpenWeather**: Para a API de clima que fornece dados em tempo real sobre o clima.
- **React**: Para a biblioteca que facilitou a construção da interface do usuário.
- **Node.js e Express**: Para o ambiente e framework que permitiram criar o backend do aplicativo.
- **Vite**: Para a ferramenta de desenvolvimento que tornou o setup do frontend mais eficiente.
- **Documentação**: Agradeço à documentação oficial de cada tecnologia utilizada, que foi essencial para a implementação.
- **Comunidade de Desenvolvimento**: A todos os desenvolvedores que compartilham conhecimento e experiências, ajudando uns aos outros a crescer.

Se você gostou do projeto ou se inspirou a criar algo similar, compartilhe sua experiência! A colaboração é sempre bem-vinda.
