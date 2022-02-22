import Header from "../Header";
import SideBar from "../SideBar";
import { Container, Content, SideBarContainer } from "./styles";

const Layout : React.FC = ({children}) => {
    return (
        <>
        <Header></Header>
        <Container>
            <SideBarContainer>
                <SideBar/>
            </SideBarContainer>
            <Content>
                {children}
            </Content>
        </Container>
        </>
    )
}


export default Layout;