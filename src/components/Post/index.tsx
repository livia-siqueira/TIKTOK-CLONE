import { IPosts } from "../../pages";
import { Button } from "../Button/styles";
import {
  Container,
  PostHeader,
  Content,
  Avatar,
  Reactions,
  PersonContainer,
  Info,
  Author,
  Description,
  Tag,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  React,
  Song,
  ButtonContainer,
} from "./styles";
import { useRef, useState } from "react";

const Post: React.FC<{ post: IPosts }> = ({ post }) => {
  const {
    name,
    username,
    url,
    tags,
    likes,
    comments,
    replies,
    songName,
    avatar,
    description,
  } = post;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [running, setRunning] = useState<boolean>(false);
  
  const toggleAction = () => {
      if(videoRef.current !== null){
          if(!running) videoRef.current.play();
          else videoRef.current.pause()

          setRunning(!running)
      }
  }
  return (
    <Container>
      <PostHeader>
        <PersonContainer>
          <Avatar src={avatar} />
          <Info>
            <Author>
              {username}
              <span>{name}</span>
            </Author>
            <Description>
              <span>{description}</span>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>
            Seguir
          </Button>
        </ButtonContainer>
      </PostHeader>
      <Content>
        <Song>
          <img src="/images/songIcon.svg"></img>
          <a>{songName}</a>
        </Song>
        <VideoContainer>
          <Video
            src={url}
            ref={videoRef}
            webkit-playsinline="true"
            loop={true}
            preload="metadata"
          />
          <ActionsContainer onClick={toggleAction}>
            <PlayerIcon
              src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"}
            ></PlayerIcon>
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Reactions>
        <React>
          <img src="/images/heartIcon.svg" />
          <a>{likes}</a>
        </React>
        <React>
          <img src="/images/bubbleIcon.svg" />
          <a>{comments}</a>
        </React>
        <React>
          <img src="/images/arrowIcon.svg" />
          <a>{replies}</a>
        </React>
      </Reactions>
    </Container>
  );
};

export default Post;
