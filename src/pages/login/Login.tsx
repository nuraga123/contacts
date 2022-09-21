import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { useState } from 'react';
import { USERS_URL } from '../../shared/contacts';

import styles from './login.module.css';

const { Title } = Typography;

type LoginValues = {
  userName: string;
}

type UserItem = {
  name: string,
  phone: string
  email: string,
  avatar: string,
  id: string,
  userName: string
}

export const Login = () => {

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const onFinish = async ({ userName }: LoginValues) => {
    setIsLoading(true);

    const response = await fetch(USERS_URL)

    const usersList: UserItem[] = await response.json()

    const foundUser = usersList
      .find((user) => user.userName === userName)

    foundUser ? setError('')
      : setError('нету пользователя');

    setIsLoading(false)
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
          loading={isLoading}
          type="primary"
          htmlType="submit"
          className={styles.btn}
        >
          Вход
        </Button>

        <br></br>

        <div>
          <a href="3">
            Зарегистрироваться
          </a>
        </div>
      </Form.Item>

      {error && <Alert message='нет имени!!!' type='error' />}
    </Form>
  )
}