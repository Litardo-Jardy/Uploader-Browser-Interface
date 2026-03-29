import { 
DocumentIcon, 
FolderUploadIcon, 
HomeRouteIcon, 
PhotoIcon, 
UploadIcon, 
VideoIcon, 
ListIcon } from '../../icons';

import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import './AppSider.css';

const AppSider = () => {

    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const topItems: MenuProps['items'] = [
      { key: '1', icon: <HomeRouteIcon size={15} />, label: 'Explorador' },
      { key: '2', icon: <FolderUploadIcon size={15}/>,     label: 'Crear carpeta' },
      { key: '3', icon: <UploadIcon size={15}/>,    label: 'Subir archivo' },
    ];

     const bottomItems: MenuProps['items'] = [
       { key: '4', icon: <DocumentIcon size={15}/>,  label: 'Todos' },
       { key: '5', icon: <PhotoIcon size={15}/>,       label: 'Imagenes' },
       { key: '6', icon: <VideoIcon size={15}/>,        label: 'Videos' },
       { key: '7', icon: <DocumentIcon size={15}/>,  label: 'Documentos' },
     ];

   return (
      <>
       <div
          className="menu-toggle"
          onClick={() => setCollapsed(!collapsed)}>
          <ListIcon />
       </div>

       <Sider
         breakpoint="lg"
         collapsedWidth="0"
         className="app-sider"
         collapsed={collapsed}
	 trigger={null}
         onCollapse={(value) => setCollapsed(value)}>

        <div className="sider-brand">
          <span className="sider-brand-name">Uploader-Browser</span>
        </div>

	<div className='container-sider-section-title'>
           <p className="sider-section-title">/Imagenes/Julia/jduaifba.mp4</p>
	</div>

        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          items={topItems}
          className="sider-menu"/>

        <div className="sider-divider" />

        <Menu
          mode="inline"
          items={bottomItems}
          className="sider-menu"/>
      </Sider>
     </>
   )}

export default AppSider;
