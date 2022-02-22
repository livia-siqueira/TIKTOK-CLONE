import { Container, Avatar, Info } from "./styles";

const User: React.FC<{
  user: { name: string; avatar: string; username?: string, views?: string };
}> = ({ user }) => {
  const { name, username, avatar, views } = user;
  return (
    <Container>
      <Avatar src={avatar}></Avatar>
      <Info>
        <a>{name}</a>
        <span>{username}</span>
        {views && <span>{views}</span> }
      </Info>
    </Container>
  );
};

export default User;
