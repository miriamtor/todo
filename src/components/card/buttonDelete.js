import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function ButtonDelete({ task }){
  const { tasks, setTasks } = useContext(TaskContext);

  const deleteTask = (taskId) => {
    const filtered = tasks.filter(task => task.id !== taskId )
    setTasks(filtered)
  };

    return (
      <>
        <Popconfirm
          title="Eliminar tarea"
          description="¿Está seguro/a de que desea eliminar esta tarea?"
          onConfirm={() => deleteTask(task.id)}
          okText="Sí"
          cancelText="No"
        >
          <Button danger icon={<DeleteOutlined />} style={{ marginTop: 5}}> Eliminar </Button>
        </Popconfirm>
      </>
    );
}