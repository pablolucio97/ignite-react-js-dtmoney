import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.widthdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    },
        {
            deposits: 0,
            widthdraw: 0,
            total: 0
        }
    )


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="dt money" />
                </header>
                <strong>{summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="dt money" />
                </header>
                <strong>{summary.widthdraw}</strong>
            </div>
            <div className='highlight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="dt money" />
                </header>
                <strong>{summary.total}</strong>
            </div>
        </Container>
    )
}