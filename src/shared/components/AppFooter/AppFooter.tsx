import { Layout } from 'antd';
import './AppFooter.css'

const AppFooter = () => {
   const { Footer } = Layout;

   return(
       <Footer style={{ textAlign: 'center' }}>
          Upload-Browser ©{new Date().getFullYear()} Created by AstroNox
       </Footer>
   )}

export default AppFooter;
