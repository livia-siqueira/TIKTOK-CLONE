import { Container } from "./styles";
import { IPosts } from "../../pages";
import Post from "../Post";

const Feed: React.FC<{ posts: IPosts[] }> = ({ posts }) => {
  return (
    <Container>
      {posts?.map((post, index) => (
        <Post key={index} post={post}/>
      ))}
    </Container>
  );
};



export default Feed;
