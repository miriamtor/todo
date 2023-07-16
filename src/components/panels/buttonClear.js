import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';

const ButtonClear = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const clear = () => {
    const undoneTasks = tasks.filter(task => !task.state)
    setTasks(undoneTasks)
  }
  
  return (
    <>
      <Button icon={<ClearOutlined />} onClick={clear}>Limpiar</Button>
    </>
  );
}

export default ButtonClear;