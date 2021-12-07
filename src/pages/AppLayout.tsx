import React from 'react'
import styled from 'styled-components/macro'

import { Layout, Menu, Breadcrumb, Space } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import Header from '@/components/Header'
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu
const { Header: HeaderD, Content, Sider } = Layout

const Wrapper = styled.div``

const StyledNavLink = styled(NavLink)``

const routerList: Record<string, string> = {
  '/home': '0',
  '/set': '1',
  '/single-farm': '2',
  '/farm': '3',
  '/profile': '4',
  '/more': '5',
}

export default function AppLayout({ children }: { children: any }) {
  return (
    <Wrapper>
      <HeaderD>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <div className="logo" />

          <Header />
        </Space>
      </HeaderD>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <StyledNavLink to="/home">首页</StyledNavLink>
            </Menu.Item>

            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  )
}
