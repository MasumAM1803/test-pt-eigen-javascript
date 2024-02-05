/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, theme } from 'antd';
import Navbar from './components/pages/Navbar';
import FooterComponet from './components/pages/FooterComponet';
import Router from './routes/router';
import LogoImg from '/mam-logo.png';

const {
  Content, Sider,
} = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <div className="logo-vertical">
          <img src={LogoImg} alt="logo" />
        </div>
        <Navbar />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Router />
          </div>
        </Content>
        <FooterComponet />
      </Layout>
    </Layout>
  );
}

export default App;
