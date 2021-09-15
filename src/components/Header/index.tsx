import logo from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

type openModalProps = {
    handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: openModalProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <Button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </Button>


            </Content>
        </Container>
    )
}