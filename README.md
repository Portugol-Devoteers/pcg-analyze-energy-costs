
# Passo a passo para rodar o projeto

## Pré-requisitos

Certifique-se de que você tenha os seguintes softwares instalados:

- **Node.js** (para rodar o front-end com React)
- **Python 3** (para rodar o back-end com Flask)

## Estrutura do Projeto

- **/src**: Contém o código do front-end feito com React.
- **/server**: Contém o código do back-end feito com Flask.

## Passos para Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Portugol-Devoteers/pcg-analyze-energy-costs.git
   cd pcg-analyze-energy-costs
   ```

2. **Instale as dependências do front-end**:

   No diretório `pcg-analyze-energy-costs`, instale as dependências do projeto:

   ```bash
   npm install
   ```

3. **Instale as dependências do back-end**:

   No diretório `server`, crie um ambiente virtual (opcional, mas recomendado) e instale as dependências do Flask:

   ```bash
   cd server
   python3 -m venv venv  # (Opcional) Criar ambiente virtual
   source venv/bin/activate  # Ativar ambiente virtual (Linux/macOS)
   .\venv\Scripts\activate  # Ativar ambiente virtual (Windows)
   pip install -r requirements.txt
   ```

4. **Inicie o servidor Flask**:

   Dentro da pasta `server`, execute o arquivo `run.py` para iniciar o back-end:

   ```bash
   python run.py
   ```

5. **Inicie o front-end React**:

   Em uma nova janela de terminal, vá para o diretório `client` e inicie o front-end:

   ```bash
   cd ..
   npm start
   ```

6. **Acesse a aplicação**:

   Após iniciar o servidor Flask e o front-end React, a aplicação estará disponível em:

   ```
   http://localhost:3000
   ```

   Certifique-se de que tanto o servidor quanto o front-end estão em execução.


