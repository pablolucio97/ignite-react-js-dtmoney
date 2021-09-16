import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type TransactionProps = {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>

type ChildrenProps = {
    children?: ReactNode;
}

type TransactionsContextData = {
    transactions: TransactionProps[]
    handleCreateNewTransaction: (transaction: TransactionInputProps) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionsProvider = ({ children }: ChildrenProps) => {

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function handleCreateNewTransaction(transactionInput: TransactionInputProps) {
      const response = await api.post('/transactions', {
        ...transactionInput, 
        createdAt: new Date()
      })
      const { transaction } = response.data
      setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, handleCreateNewTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}
