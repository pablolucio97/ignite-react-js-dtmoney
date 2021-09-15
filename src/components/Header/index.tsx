import logo from '../../assets/logo.svg';
import { Button, Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <Button type="button">
                    Nova transação
                </Button>
            </Content>
        </Container>
    )
}