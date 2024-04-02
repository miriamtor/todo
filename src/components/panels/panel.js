import React, { useState, useEffect } from 'react';
import { Card, Empty } from 'antd';
import CardTask from '../card/cardTask';
import ButtonClear from './buttonClear';
import { FileTextOutlined, FileDoneOutlined } from '@ant-design/icons';
const Panel = ({ type, filteredTasks }) => {
  const [categorizedTasks, setCategorizedTasks] = useState([]);
  const [showButtonClear, setShowButtonClear] = useState(false);
  useEffect(() => {
    const doneTasks = filteredTasks.filter(task => task.state);
    setShowButtonClear(doneTasks.length > 0);
  }, [filteredTasks]);
  useEffect(() => {
    const filteredCategorizedTasks = filteredTasks?.filter(task => type === 'done' ? task.state : !task.state);
    setCategorizedTasks(filteredCategorizedTasks || []);
  }, [filteredTasks]);
  return (
    <>
      <Card
        title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {type === 'done' && <FileDoneOutlined style={{ marginRight: 8, marginTop: 4 }} />}
          {type === 'todo' && <FileTextOutlined style={{ marginRight: 8, marginTop: 4 }} />}
          <span style={{ fontSize: 20 }}>{type === 'done' ? 'Done' : 'To Do'}</span>
        </div>}
        extra={type === 'done' && showButtonClear ? <ButtonClear/> : null }
        style={{
          textAlign: 'left',
          minWidth: 300,
          minHeight: '40vh',
          width: '95%',
          backgroundColor: '#FAFCFF'
        }}
      >
        {categorizedTasks.map(task => (
          <CardTask key={task.id} task={task} tasks={categorizedTasks} />
        ))}
        {!categorizedTasks.length && (
          <Empty
            description={`No hay tareas ${type === 'done' ? 'completadas' : 'pendientes'}`}
            style={{ marginTop: 20 }}
          />
        )}
      </Card>
    </>
  );
}
export default Panel;



