import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { createServer } from 'miragejs'
import Modal from 'react-modal'
import { useState } from 'react';

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
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

    </>
  );
}

export default App;
