import User from "../User";
import {
  Container,
  Links,
  InfoContainer,
  MenuItem,
  Following,
  FollowingHeader,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <MenuItem active={true}>
        <img src="/images/homeIcon.svg" />
        <span>Para você</span>
      </MenuItem>
      <MenuItem active={false}>
        <img src="/images/peopleIcon.svg" />
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "Will Smith",
             username: "willsmith",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1645556400&x-signature=HvSHMx9pcHtaIvZGP3t5wjbU2sg%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links >
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
};

export default SideBar;
