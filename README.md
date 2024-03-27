# Resumo da Aplicação
- Este foi um projeto desenvolvido para à vaga React Pleno na empresa VersoTech e consiste em fazer uma listagem de pokémons e uso de redux para armazenamenteo de estados globais.

## Autenticação de Usuário:
- A aplicação permite que os usuários façam login sem credenciais para acessar a opção de adicionar os pokémons à pokédex.

## Lista de Pokémons:
- Exibe uma lista de Pokémons obtidos a partir da pokeapi.co.
- Implementa a paginação para exibir um número limitado de Pokémons por página.
- Permite buscar Pokémons pelo nome.
- Permite adicionar Pokémons à Pokédex do usuário.
- A Pokédex do usuário é mantida no estado global da aplicação utilizando Redux.

## Detalhes do Pokémon:
- Exibe os detalhes de um Pokémon específico, incluindo sua imagem, número na Pokédex, tipos e habilidades.
- Os detalhes são obtidos da API ao clicar em um Pokémon na lista.

## Modal da Pokédex:
- Exibe os Pokémons adicionados à Pokédex do usuário em um modal.
- Cada Pokémon é representado por sua imagem.
- O modal ocupa toda a altura da tela e 80% da largura, proporcionando uma experiência de visualização agradável em dispositivos móveis.

## Modal do Treinador Pokémon:
- Permite que um novo usuário se identifique como um Treinador Pokémon, inserindo seu nome.
- O nome do Treinador é armazenado no estado global da aplicação com redux.

## Persistência de Dados:
- Utiliza o Redux para armazenar informações importantes, como o usuário atual e os seus Pokémons na Pokédex.
- As informações do usuário não são mantidas quando a página é recarregada.

## Estilização Responsiva:
- A aplicação utiliza estilos responsivos para garantir uma experiência consistente em diferentes dispositivos e tamanhos de tela.

## Integração com API:
- Utiliza uma API para obter informações sobre os Pokémons, como detalhes, tipos e habilidades.
- As requisições à API são tratadas de forma assíncrona para garantir uma experiência de usuário fluida.

### Para executar o projeto:
1. Clonar o reposiótio 
```bash 
git clone https://github.com/AlexandreNoguez/versotech-react
```

2. Acesse o diretório do projeto 
```bash
cd versotech-react
```

3. Execute o comando para baixar as dependências do projeto
```bash 
npm install
```

4. Execute a aplicação com o comando 
```bash 
npm run dev
```
5. Quando terminar de executar todos os comandos, o projeto pode ser acessado no navegador <a href="http://localhost:5173">localhost</a>

### Notas
- É necessário ter o nodejs 18+ instalado para executar o projeto localmente
- Temporariamente o projeto pode ser acessado em meu domínio <a href="https://alexandrenoguez.dev.br/">alexandrenoguez</a>