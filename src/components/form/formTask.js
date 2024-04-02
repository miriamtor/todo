import React, { useContext } from 'react';
import { Form, Button, Row, Col } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import TaskContext from '../../context/TaskContext';
import TitleInput from './inputs/titleInput';
import DescInput from './inputs/descInput';
import DateInput from './inputs/dateInput';
import TagSection from './inputs/tagSection/tagSection';
import dayjs from 'dayjs';
const FormTask = ({ closeModal, form, task, tags, setTags }) => {
  const { setTasks } = useContext(TaskContext);
  const initialValues = task ?
    {
      title: task.title,
      description: task.description,
      date: dayjs(task.date, 'DD/MM/YYYY')
    } :  {}
  const addOrUpdateTask = (newTask) => {
    task && task.id ? editTask(task.id, newTask) : addTask(newTask);
    closeModal();
  };
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const editTask = (taskId, updatedTask) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
    );
  };
  const onFinish = (values) => {
    const newTask = {
      ...values,
      id: task ? task.id : uuidv4(),
      date: dayjs().format('DD-MM-YYYY'),
      tags: tags,
      state: false
    };
   const maxIndex = Math.floor(Math.random() * 3);
   for (let index = 0; index < maxIndex; index++) {
    addOrUpdateTask(newTask);
   }
  };
  return (
    <Form
      form={form}
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <TitleInput />
      <DescInput />
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <DateInput task={task} initialValue={initialValues.date} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <TagSection tags={tags} setTags={setTags} task={task} />
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            {task ? 'Editar' : 'Guardar'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
export default FormTask;









