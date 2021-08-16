import React from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import Auth from '../Pages/Authentication/Auth'

function Login({ setView }) {

  const user = {
    password: "12345",
    username: "hasan@gmail.com",
    name: "Hasan"
  }
  const onFinish = (values) => {
    if (user.password === values.password && user.username === values.username) {
      setView('DASHBOARD')
    } else {
      alert('Wrong Email or Password')
    }
  }
  return (
    <>
      <Col>
        <Row align='middle' justify='center' style={{ height: '100vh' }}>
          <Form
            onFinish={onFinish}
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button type="default" onClick={() => setView('SIGN_UP')} >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Col>
    </>

  )
}

export default Login
