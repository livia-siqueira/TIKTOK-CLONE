import type { GetServerSideProps, NextPage } from "next";
import Feed from "../components/Feed";
import Layout from "../components/Layout";
import Suggestions from "../components/Suggestions";
import { getPosts } from "../lib/helpers";

interface Tag {
  title: string;
}

export interface IPosts {
  id: number;
  name: string;
  likes: number;
  comments: number;
  replies: number;
  username: string;
  avatar: string;
  description: string;
  url: string;
  tags: Tag[];
  songName: string;
}

const Home: NextPage<{ posts: IPosts[] }> = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const data = getPosts();
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
