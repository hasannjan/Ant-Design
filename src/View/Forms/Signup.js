import React, { useState } from 'react';
import {Form, Input, DatePicker, Col, Row, Button} from 'antd';

const Signup = ({setView}) => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
        <Col>
       <Row align='middle' justify='center' style={{height: '100vh'}}>
      <Form
        wrapperCol={{span:30}}
        initialValues={{remember:true}}
        layout="horizontal">
       
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="Re-type Password">
          <Input type="password"/>
        </Form.Item>
        
        <Form.Item label="Date Of Birth">
          <DatePicker />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType >
                Submit
            </Button>
            <Button type="default" onClick={() => setView('LOGIN')} >
                Login
            </Button>
        </Form.Item>
      
      </Form>

      </Row>
      </Col>
    </>
  );
};

export default Signup