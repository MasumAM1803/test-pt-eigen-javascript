import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

function FooterComponet() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Test PT Eigen
      {' '}
      {new Date().getFullYear()}
      {' - '}
      Created by Ma&rsquo;sum Abdul Matin
    </Footer>
  );
}

export default FooterComponet;
