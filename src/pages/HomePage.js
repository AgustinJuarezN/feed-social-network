import React, { useEffect } from "react";
import Post from "../components/Post/Post";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/actions/post.actions";
const { Content } = Layout;

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    dispatch(postActions.getAllPosts());
  };

  return (
    <Content style={{ padding: "0 50px" }} className="site-layout-background">
      <Layout style={{ padding: "24px 20px" }}>
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
              userId={post.userId}
            />
          ))}
      </Layout>
    </Content>
  );
};

export default HomePage;
