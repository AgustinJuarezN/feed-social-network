import React from "react";
import ExampleComment from "../components/Comment";
import { Layout } from "antd";

const { Content } = Layout;

const HomePage = () => {
  return (
    <Content style={{ padding: "0 50px" }} className="site-layout-background">
      <Layout style={{ padding: "24px 20px" }}>
        <ExampleComment>
          <ExampleComment>
            <ExampleComment />
            <ExampleComment />
          </ExampleComment>
        </ExampleComment>
      </Layout>
    </Content>
  );
};

export default HomePage;
