import {
  Container,
  LogoIcon,
  OptionsContainer,
  LogoContainer,
  Content,
  Logo,
  Icon,
  Avatar,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"/>
          <Avatar>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7067245637435293702~c5_100x100.jpeg?x-expires=1645556400&x-signature=UJGgli9SFzEOLFZFQQlTk4JVFNM%3D" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default Header;
