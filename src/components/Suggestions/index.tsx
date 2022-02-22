import { getItens, getUsers } from "../../lib/helpers";
import { Button } from "../Button/styles";
import User from "../User";
import {
  ArrowIcon,
  BoxContainer,
  BoxHeader,
  Container,
  DownloadImage,
  Icon,
  IconsContainer,
  Item,
  ItemContainer,
} from "./styles";

export interface IItem {
  title: string;
  views: string;
  avatar: string;
}

const Suggestions: React.FC = () => {
  const people = getUsers();
  const itens = getItens();

  return (
    <Container>
      <IconsContainer>
        <Icon src="/images/facebookIcon.svg" />
        <Icon src="/images/pinterestIcon.svg" />
        <Icon src="/images/twitterIcon.svg" />
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          {" "}
          <span>Contas Sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item key={person.username} >
              <User user={person} />
              <Button fontSize={14} outlined>
                {" "}
                Seguir{" "}
              </Button>
            </Item>
          ))}
          {people.map((person, index) => (
            <Item key={person.username} >
              <User key={person.username} user={person} />
              <Button fontSize={14} outlined>
                {" "}
                Seguir{" "}
              </Button>
            </Item>
          ))}
          {people.map((person, index) => (
            <Item key={person.username} >
              <User key={person.username} user={person} />
              <Button fontSize={14} outlined>
                {" "}
                Seguir{" "}
              </Button>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, index) => (
            <Item  key={item.avatar} >
              <User user={item} />
              <ArrowIcon />
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/appstore.png"></DownloadImage>
      <DownloadImage src="/images/playstore.png"></DownloadImage>
      <DownloadImage src="/images/amazon.png"></DownloadImage>
    </Container>
  );
};

export default Suggestions;
