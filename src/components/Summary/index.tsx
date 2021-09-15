import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="dt money" />
               </header>
               <strong>$1000</strong>
           </div>
           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="dt money" />
               </header>
               <strong>$400</strong>
           </div>
           <div className='highlight'>
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="dt money" />
               </header>
               <strong>$6000</strong>
           </div>
        </Container>
    )
}