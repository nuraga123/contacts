import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';

import styles from './login.module.css';

const { Title } = Typography;

type LoginValues = {
  userName: string;
}

export const Login = () => {
  const onFinish = ({ userName }: LoginValues) => {
    console.log('Received values of form: ', userName);
  };

  return (
    <Form
      name="normal_login"
      className={styles.form}
      initialValues={{
        userName: '',
        password: ''
      }}
      onFinish={onFinish}
    >
      <Title>
        Авторизация
      </Title>

      <Form.Item
        name="userName"
        rules={[{
          required: true,
          message: 'Введите ваше имя'
        }]}
      >
        <Input
          prefix={
            <UserOutlined
              className="site-form-item-icon"
            />
          }
          placeholder="Имя Ползователя" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Вход
        </Button>
        <div>
          <a href="3">
            Зарегистрироваться
          </a>
        </div>
      </Form.Item>
    </Form>
  )
}