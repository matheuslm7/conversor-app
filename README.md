# Conversor de Moedas

Este é um aplicativo simples de conversão de moedas, criado com [React Native](https://reactnative.dev/) utilizando o Expo. Permite converter valores entre diferentes moedas usando taxas de câmbio obtidas de APIs externas.

## 🚀 Demonstração

![Screenshot - Conversor de Moedas](./assets/screenshot.png)

## ✨ Funcionalidades

- Conversão entre diversas moedas (USD, BRL, EUR, etc.)
- Busca automática das taxas de câmbio mais recentes
- Troca rápida entre moeda de origem e destino
- Interface simples, responsiva e de fácil uso

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- APIs:
    - [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas)
    - [ExchangeRate-API](https://www.exchangerate-api.com/)

## 📦 Instalação

1. **Clone este repositório:**
    ```bash
    git clone https://github.com/matheuslm7/conversor-app.git
    cd conversor-app
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn
    ```

3. **Inicie o app com o Expo:**
    ```bash
    npx expo start
    ```

4. **Abra no seu celular:**
    - Instale o [Expo Go](https://expo.dev/client) no seu dispositivo móvel.
    - Escaneie o QR Code exibido no terminal.

## 📁 Estrutura do Projeto

```
.
├── App.js
├── app.json
├── assets/
├── src/
│   ├── components/
│   ├── constants/
│   ├── services/
│   ├── styles/
│   └── utils/
```

- `App.js` — Componente principal da aplicação.
- `src/components/` — Componentes reutilizáveis (ex: Botões, Input, ResultCard).
- `src/services/api.js` — Funções para buscar taxas de câmbio.
- `src/constants/currencies.js` — Lista de moedas suportadas.

## 💡 Como funciona?

1. O usuário escolhe a moeda de origem e destino.
2. Insere o valor a ser convertido.
3. O app busca a cotação mais recente e exibe o valor convertido.

## 📃 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por Matheus Lima (https://github.com/matheuslm7)
