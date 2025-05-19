# WaiterApp

## 📄 Descrição

O WaiterApp é uma ferramenta projetada para facilitar o trabalho de garçons, agilizando o processo de atendimento e gestão de pedidos. O objetivo do app é melhorar a eficiência dos serviços em restaurantes, bares e cafés.

Funcionalidades principais:
- App mobile para o garçom anotar os pedidos
- Dashboard web para visualização dos pedidos realizados
- Comunicação em tempo real com WebSockets

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled-components
- Socket.io-client
- Axios
- React Toastify

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/carlosdancr/waiterapp-client.git
   cd waiterapp-client
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

> **Observação:** Certifique-se de que o backend da aplicação esteja rodando em `http://localhost:3001` para o funcionamento completo do sistema.

## 💡 Exemplos de Uso

- **Visualização dos pedidos:** Acompanhe todos os pedidos em tempo real, separados por status (Fila de espera, Em preparação, Pronto).
- **Atualização de status:** Altere o status dos pedidos conforme o andamento do preparo.
- **Cancelamento de pedidos:** Cancele pedidos diretamente pela interface, com feedback visual imediato.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
