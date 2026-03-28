import {
  UploadOutlined,
  DashboardOutlined,
  InboxOutlined,
  CalendarOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import '../styles/home.css';
import { UploaderBrowserLogo } from '../shared/icons';

const { Content, Footer, Sider } = Layout;

const topItems: MenuProps['items'] = [
  { key: '1', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '2', icon: <InboxOutlined />,     label: 'Inbox' },
  { key: '3', icon: <UploadOutlined />,    label: 'Project' },
];

const bottomItems: MenuProps['items'] = [
  { key: '4', icon: <CalendarOutlined />,       label: 'Calendar' },
  { key: '5', icon: <BarChartOutlined />,        label: 'Reports' },
  { key: '6', icon: <QuestionCircleOutlined />,  label: 'Help & Center' },
  { key: '7', icon: <SettingOutlined />,         label: 'Settings' },
];

const Home = () => {
  const { token: { borderRadiusLG } } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="app-sider"
        onBreakpoint={(broken) => console.log(broken)}
        onCollapse={(collapsed, type) => console.log(collapsed, type)}
      >
        {/* Logo + nombre */}
        <div className="sider-brand">
          <span className="sider-brand-name">Uploader-Browser</span>
        </div>

        {/* Sección superior con título */}
        <p className="sider-section-title">Title Menu</p>
        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          items={topItems}
          className="sider-menu"
        />

        {/* Divisor */}
        <div className="sider-divider" />

        {/* Sección inferior */}
        <Menu
          mode="inline"
          items={bottomItems}
          className="sider-menu"
        />
      </Sider>

      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="container-content"
            style={{ padding: 24, minHeight: 360, borderRadius: borderRadiusLG }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Upload-Browser ©{new Date().getFullYear()} Created by AstroNox
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
