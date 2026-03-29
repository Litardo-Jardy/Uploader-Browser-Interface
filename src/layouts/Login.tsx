import '../styles/Login.css'
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import type { LoginRequest } from '../types/auth';
import { login } from '../api/auth';
import { useNotification } from '../hooks/useNotification'; 
import { UploaderBrowserLogo } from '../shared/icons';


export const Login = () => {

   const { open } = useNotification();

const onFinish: FormProps<LoginRequest>['onFinish'] = async (values) => {
  try{
     const res = await login(values);

     localStorage.setItem("token", res.token);
     localStorage.setItem("user", res.user_name);

     open("success", "Éxito", "Inicio de sesion con exito");
  } catch(err){
     if (err instanceof Error) {
        console.error(err.message);
	open("error", "Error", "Credenciales incorrectas");
     } else {
       console.error("Error desconocido")}
  }
};

const onFinishFailed: FormProps<LoginRequest>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
  open("error", "Error", "Los campos estan vacios")
};

   return(
      <div className='ContainerLogin'>
           <div className='text-title-login'> 
              <UploaderBrowserLogo width={100} height={100} /> 
	      <h2 className='text-login'>Uploader-Browser</h2>
	   </div>
         <Form
            name="vertical"
	    layout='vertical'
          
            style={{ minWidth: 250 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
                <Form.Item<LoginRequest>
                   label={<FaRegUser color='#38bdf8'/>}
                   name="user"
                   rules={[{ required: true, message: 'Por favor introduzca su usuario' }]}>
                   <Input placeholder='Ingresar usuario' />
                 </Form.Item>

                 <Form.Item<LoginRequest>
                   label={<FiLock color='#38bdf8' />}
                   name="pass"
                   rules={[{ required: true, message: 'Por favor introduzca su contraseña' }]}>
                   <Input.Password placeholder='Ingresar contraseña' />
                 </Form.Item>

                 <Form.Item label={null}>
                   <Button type="primary" htmlType="submit">
                     Submit
                   </Button>
                 </Form.Item>
        </Form>
     </div>	
   )}
export default Login;
