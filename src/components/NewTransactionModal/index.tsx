import Modal from 'react-modal'

import { Container, RadioBox, TransactionTypesCoontainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit')

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
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />

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

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}