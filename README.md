
# ProIoT

Este é um projeto dedicado ao processo seletivo para desenvolvedor backend na empresa ProIoT.



## Tecnologias utilizadas

**Back-end:** Node, Express, zod, TypeScript, WebSocket, Swagger, MongoDB e Jest.


## Como usar

Começaremos fazendo o clone do repositório:

```bash
    git clone git@github.com:eriklopess/desafio-PROIOF.git
```

Agora precisamos entrar no repositório utilizando o seguinte comando:

```bash
    cd desafio-PROIOF
```

Ótimo, agora vamos instalar todas as dependencias para o projeto conseguir rodar sem nenhum problema, use o seguinte comando:

```bash
    npm install
```

Agora nós **precisamos** colocar as nossas váriaveis de ambiente, para isso você vai precisar digitar o seguinte comando:

```bash
    touch .env
```

Logo após criar nosso arquivo deváriaveis de ambiente, você vai precisar abrir o mesmo em seu editor de código, caso você use o *vscode* pode utilizar o comando abaixo:

```bash
    code .env
```

Agora que você abriu o arquivo .env você precisará colocar as seguintes váriaveis:

MONGO_DB_URI=<sua_uri_mongo>
PORT=3000

*Obs: Todas essas váriaveis são obrigatórias para o projeto iniciar!*

*Obs2: Caso opte por usar uma porta diferente de 3000, será necessário alterar manualmente no arquivo src/docs/apischema.json, para o swagger funcionar.*

Agora que você inseriu todas as váriaveis só vamos precisar ligar o servidor do projeto, para isso só digitar o seguinte comando no mesmo bash que você estava usando:

```bash
    npm start
```

Se você recebeu esta mensagem em seu console `Server is running on port ${PORT}`, seu servidor está online, caso você tenha recebido algum erro tente refazer os passos anteriores, ou verificar uma URI mongo.



## Testes

Nesta aplicação eu fiz 17 testes automatizados, que verificam se todas as rotas estão funcionando corretamente.

Vamos lá, agora vamos testar a aplicação.

Para isso vamos precisar ligar o servidor utilizando o seguinte comando:

```bash
    npm start
```
*Caso seu servidor estiver ligado é só ignorar o comando acima.*

Tá, agora precisamos rodar todos os testes, isso é simples, só digitar o seguinte comando em seu bash:

```bash
    npm test
```

Se o projeto estiver corretamente configurado é para aparecer a seguinte imagem.

![App Screenshot](https://i.imgur.com/EmpRHNb.png)
## Documentação

Você pode entrar na documentação das rotas da API REST na seguinte rota: `/docs`

### WebSockets

Agora vamos para o WebSocket do Projeto, ele se encontra na seguinte rota: `ws://localhost:3000`.

Não é possivel enviar dados através dele, já que o mesmo é somente o caminho para receber notificações quando um dispositivo é editado ou criado.

Caso você criar um dispositivo novo enquanto estiver conectado ao WebSocket você receberá uma mensagem do servidor parecida com esta:

![](https://i.imgur.com/Kp3xsLM.png)

Mesma coisa caso você editar um dispositivo quando estiver conectado ao WebSocket

![](https://i.imgur.com/xOkXEE8.png)


# Arquivos de configuração.

Todos os arquivos de configuração se encontram no email no qual este projeto foi enviado!
