import React, { useEffect, useState, useContext, createContext } from 'react';
import './App.css';
import { tasks } from './tasks'

import TasksList from './TasksList';
import TaskForm from './TaskForm';
import { Button } from 'antd';
import { Input, Select } from 'antd';
import { UserOutlined, MailTwoTone } from '@ant-design/icons'
import { message } from 'antd'
import { Checkbox, Form } from 'antd';
import { Modal } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons'
import Faq from './components/Faq'
import { Collapse } from 'antd';
import Pricing from './components/Pricing'
import { Divider, List, Typography } from 'antd';
import ContactForm from './components/ContactForm'

import { LockOutlined } from '@ant-design/icons';



export const TaskContext = createContext(null)
//Faq
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
//Faq-end


const App = () => {
  //form
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const onChange = (key) => {
    console.log(key);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  let [tareas, setTareas] = useState([])
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  useEffect(() => {
    setTareas(tasks)
  }, [])

  const createTask = (task) => {
    setTareas([...tareas, task])

  }
  const deleteTask = (id) => {
    setTareas(tareas.filter(task => task.id !== id))
    console.log(id)

  }
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


  return (

    <TaskContext.Provider value={{
      tareas,
      createTask,
      deleteTask
    }}
    >
      <main className='p-5 App'>
        <TaskForm createTask={createTask}

        />
        <TasksList tareas={tareas} />
      </main>
      <article>
        <Button

          onClick={showModal}
          offset="5" className=''
          style={{
            'color': 'azure',
            backgroundColor: 'orange'
          }}
          footer={null}>
          <span >Play</span>
          <PlayCircleFilled />
        </Button>
        <Modal footer={null}
          title={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >

          <div className="block">
            <div className="container-fluid">
              <div className="titleholder">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/DxNu1tVksqM?si=JA8RzXhOAVqZnuRT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowullscreen="true"></iframe>
              </div>
            </div>
          </div>

        </Modal>
      </article>
      <article >
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange}
          className='collase' />
        <Faq />
        <Button type='primary' style={{ 'color': 'olive', 'border-radius': '5px solid red' }}>Email  data</Button>
      </article>
      <article>
        <Pricing />
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[NUMERO]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </article>
      <Divider />
      <h1 className='contact-title'>CONTACTA CON NOSOTROS</h1>
      <Form style={{width:'40%',margin:'auto'}}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
          <Divider />
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="telefono"
            />
          </Form.Item>

          <Form.Item
            name="direccion"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="direccion"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button ">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>

    </TaskContext.Provider >


  );
};
export default App;