# Exemplo simples api OpenAI GPT 3 modelo de conclusão de texto

Você escreve uma frase e o modelo gera um texto de resposta.

## Principais bibliotecas utilizadas no projeto:
- openai (api da OpenAI)
- dotenv (carregar variáveis de ambiente)
- readline (leitura da resposta no terminal)

> Para mais informações sobre as dependências Node.js no projeto confira o arquivo package.json ou package-lock.json

## Softwares necessários

- Node.js 18 LTS [Download](https://nodejs.org/en/blog/release/v18.15.0)  
Observação: Ao instalar o Node.js no Windows, certifique-se de marcar a opção "Add to PATH" para que o Node.js seja reconhecido. Não garantimos o funcionamento do projeto em outras versões do Node.js diferentes da 18 LTS (Suporte de longo prazo).

- Visual Studio Code [Download](https://code.visualstudio.com/)

## Executando o projeto

### Configurar as variáveis de ambiente (importante)
  
- Crie uma cópia do arquivo .env.example no mesmo diretório e renomeie para .env

- Preencha o campo OPENAI_API_KEY do arquivo .env com a chave registrada no portal de desenvolvedor da OpenAI:
  ```
  OPENAI_API_KEY='chave'
  ```

### Iniciar o projeto

- Para instalar dependências use o comando:
  ```
  npm install
  ```

- Para executar o aplicativo use o comando:
  ```
  node index.js
  ```

 
