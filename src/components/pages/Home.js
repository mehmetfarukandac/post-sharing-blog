import { useSelector } from "react-redux";
import PostList from "../post/PostList";
import Layout from "./layout";

function Home() {
  const posts = useSelector(({ post }) => post.posts);

  return (
    <Layout>
      {
        posts ? (
          <PostList />
        ) : (
          <>Loading...</>
        )
      }
    </Layout>
  );
}

export default Home;