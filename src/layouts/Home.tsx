import { Layout } from 'antd';
import '../styles/home.css';
import AppSider from '../shared/components/AppSider/AppSider';
import AppFooter from '../shared/components/AppFooter/AppFooter';
import { Button, Upload } from 'antd'
import { UploadIcon } from '../shared/icons';
import FileItem from '../shared/components/Uploader/FileItem';
import { useState } from 'react';
import type { UploadFile } from 'antd'
import { uploadFile } from '../api/uploadFile';

const Home = () => {
   const [files, setFiles] = useState<UploadFile[]>([])
   console.log(files);
   const { Dragger } = Upload;
   const { Content } = Layout;

  return (
    <Layout>
     <AppSider />
     <Layout>
        <Content style={{ margin: '12px 8px 0' }}>
          <div className="uploader-wrapper">

            <div className="uploader-header">
              <div className='uploader-container-titles'>
                <h2 className="uploader-title">Subir archivos</h2>
                <p className="uploader-sub">Selecciona tus archivos</p>
              </div>
            </div>

            <Dragger className="uploader-dragger" 
	      multiple
	      showUploadList={false}
              fileList={files}
	      customRequest={ async ({ file, onProgress, onSuccess, onError  }) => {
                 try {
                    await uploadFile(
                      file as File,
		      "*",
		      (percent) => {
                        onProgress?.({ percent })
		      });
		    onSuccess?.("ok");
		 } catch(err) {
                    onError?.(err as Error);
		 }
	      }} 
	      onChange={({ fileList }) => {
                            setFiles(fileList.map(f => ({
                                      ...f,
                                       status: (f.status === 'error' ? 'uploading' : f.status) as UploadFile['status']
                            })))
                        }}>
              <div className="uploader-drop-icon">
	      <UploadIcon size={35}/>
              </div>
              <p className="uploader-drop-title">Has clic para seleccionar</p>
            </Dragger>

            <div className="uploader-meta">
              <span style={{ textAlign: "start" }}>Formatos: <br /> JPG, PNG, MP4, PDF, DOC</span>
              <span style={{ textAlign: "start" }} >Máximo: <br /> 5GB por archivo</span>
            </div>

            <div className="uploader-files">
                {[...files].reverse().map((file) => (
                  <FileItem
                    key={file.uid}
                    name={file.name}
                    size={`${((file.size ?? 0) / 1024 / 1024).toFixed(1)} MB`}
                    progress={file.percent ?? 0}
                    status={file.status as 'uploading' | 'done' | 'error'}
                    type={
                      file.type?.startsWith('image/') ? 'image' :
                      file.type?.startsWith('video/') ? 'video' : 'document'
                    }
                  />
                ))}
            </div>

            <div className="uploader-footer">
              <Button className="uploader-btn-cancel">Cancelar</Button>
              <Button type="primary" className='uploader-bottom' >
               <span className='uploader-text-bottom'> Editar nombre </span>
              </Button>
            </div>

    </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Home;
