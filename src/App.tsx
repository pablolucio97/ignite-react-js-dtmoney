import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { createServer } from 'miragejs'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }


  createServer({
    routes() {
      this.namespace = 'api'
      this.get('/transactions', () => {
        return [
          {
            id: 1,
            name: 'Pablo'
          }
        ]
      })
    }

  })

  return (
    <>
      <GlobalStyle />
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

    </>
  );
}

export default App;
