import { useState, FormEvent } from 'react'
import Modal from 'react-modal'

import { Container, RadioBox, TransactionTypesCoontainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault()

        const data = {
            title,
            value,
            type,
            category
        }

        api.post('/transactions', data)


    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="dt money" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.valueAsNumber)}
                />

                <TransactionTypesCoontainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="dt money" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="dt money" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypesCoontainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}