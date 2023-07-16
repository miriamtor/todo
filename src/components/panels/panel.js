import React, { useState, useEffect } from 'react';
import { Card, Empty } from 'antd';
import CardTask from '../card/cardTask';
import ButtonClear from './buttonClear';

const Panel = ({ type, filteredTasks }) => {
  const [categorizedTasks, setCategorizedTasks] = useState([]);

  useEffect(() => {
    const filteredCategorizedTasks = filteredTasks?.filter(task => type === 'done' ? task.state : !task.state);
    setCategorizedTasks(filteredCategorizedTasks || []);
  }, [filteredTasks]);

  return (
    <>
      <Card 
        title={type === 'done' ? 'Done' : 'To Do'}  
        extra={type === 'done' ? <ButtonClear/> : null}
        style={{
          textAlign: 'left',
          minWidth: 300,
          minHeight: '40vh',
          width: '95%',
          backgroundColor: '#fafcff'
        }}
      >
        {categorizedTasks.map(task => (
          <CardTask key={task.id} task={task} />
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