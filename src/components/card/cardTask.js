import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { Card, Space, Tag, Switch, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import ModalForm from '../shared/modalForm';
import ButtonDelete from './buttonDelete';
import dayjs from 'dayjs';
const { Text } = Typography;

const CardTask = ({ task }) => {
    const { setTasks } = useContext(TaskContext);
    const { id, title, description, state, date, tags } = task;
    const [ done, setDone ] = useState(state);

    const checkTask = () => {
      const newDone = !done;
      setTasks((prevTasks) =>
        prevTasks.map((prevTask) => {
          if (prevTask.id === id) {
            if (newDone) {
              return { ...prevTask, state: newDone, date: dayjs().format('DD-MM-YYYY') };
            } else {
              return { ...prevTask, state: newDone, date: prevTask.previousDate };
            }
          }
          return prevTask;
        })
      );
      setDone(newDone);
    };

    const today = dayjs().format('DD-MM-YYYY')
    return (
      <Card
        style={{
          width: 250,
          border: 'none',
          boxShadow: '2px 2px 5px #999',
          display: 'flex',
          marginTop: 15
        }}
      >
        <Switch
          size="small"
          onChange={checkTask}
          style={{
            backgroundColor: done ? 'green' : '#65799B',
            float: 'right',
            marginLeft: 170
          }}
          checkedChildren={<CheckOutlined />}
          defaultChecked={state}
        />
        <Space direction="vertical">
          <Text>{title}</Text>
          <Text type="secondary">{description}</Text>
          <Text
            type={ state ? 'default' : dayjs(date).isBefore(dayjs().startOf('day')) ? 'danger' : 'success' }
            >
            {date}
          </Text>
          <Space size={[0, 8]} wrap>
            {tags && tags.map((tag) => (
              <Tag key={tag.text} color={tag.color}>
                {tag.text}
              </Tag>
            ))}
          </Space>
          <Space style={{ display: 'flex' }}>
            <ModalForm task={task} disabled={state}/>
            <ButtonDelete task={task}  />
          </Space>
        </Space>
      </Card>
    );
}

export default CardTask;
