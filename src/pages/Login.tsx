import '../styles/Login.css'
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Login = () => {
   return(
      <div className='ContainerLogin'>
           <div className='text-title-login'> 
              <h2 className='text-login'>Iniciar Sesion</h2>
	   </div>
         <Form
            name="vertical"
	    layout='vertical'
          
            style={{ minWidth: 250 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
                <Form.Item<FieldType>
                   label={<FaRegUser />}
                   name="username"
                   rules={[{ required: true, message: 'Por favor introduzca su usuario' }]}>
                   <Input placeholder='Ingresar usuario' />
                 </Form.Item>

                 <Form.Item<FieldType>
                   label={<FiLock />}
                   name="password"
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
