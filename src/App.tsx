import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { createServer, Model } from 'miragejs'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./context/TransactionsContext";


function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }


  createServer({

    models:{
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions:[
          {
            id: 1,
            title: "Freelance de website",
            type: "deposit",
            category: "Dev",
            amount: 6200,
            createdAt: "2021-09-16 12:31",
          },
          {
            id: 2,
            title: "Aluguel",
            type: "withdraw",
            category: "Moradia",
            amount: 1100,
            createdAt: "2021-09-16 12:31"
          },
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('transaction', data)
      })
    }

  })

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

    </TransactionsProvider>
  );
}

export default App;
