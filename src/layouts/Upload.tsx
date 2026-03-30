import { Layout, theme } from 'antd';
import '../styles/home.css';
import AppSider from '../shared/components/AppSider/AppSider';
import AppFooter from '../shared/components/AppFooter/AppFooter';

const Upload = () => {

  const { Content } = Layout;
  const { token: { borderRadiusLG } } = theme.useToken();

  return (
    <Layout>
     <AppSider />
     <Layout>
        <Content style={{ margin: '12px 8px 0' }}>
          <div
            className="container-content"
            style={{ padding: 24, minHeight: 360, borderRadius: borderRadiusLG }}
          >
            content
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  )}

export default Upload
