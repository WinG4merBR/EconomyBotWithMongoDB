# Configurando aplicação

<p>Para começar o desenvolvimento você precisa ter o Node.js <strong>16</strong> instalado! <br><br>

Se estiver no Windows você pode instalar <a href="https://nodejs.org">aqui</a>

Se estiver no Linux recomendo usar o <a href="https://github.com/nvm-sh/nvm">nvm(Node Version Manager)</a> <strong>Lembrando a aplicação usa Node.js 16 (LTS)</strong> então lembre-se de usar:
</p>

```bash
$ nvm install --lts
```

## Adicionando `config.json`

<p>Para configurar o bot você precisa ter um Atlas no <a href="https://mongodb.com">MongoDB</a> e ter uma aplicação no Discord Developers</p>


```json
{
    "prefix": "<prefixo do seu bot>",
    "token": "<token do seu bot>",
    "uri": "<uri-do-mongodb>"
}
```

## Executando a aplicação

<p>Instale as dependências usando: npm install e execute usando "node ." e PRONTO! sua aplicação está pronta!</p>