import React from 'react';
import { Form, DatePicker } from 'antd';
import dayjs from 'dayjs';

export default function DateInput({ task }) {
  const disabledDate = (current) => {
    const today = dayjs().startOf('day');
    return current && current < today;
  };

  return (
    <Form.Item
      label="Fecha de realización de la tarea:"
      name="date"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa la fecha de realización'
        }
      ]}
    >
      <DatePicker
        placeholder="Fecha"
        format="DD-MM-YYYY"
        disabledDate={disabledDate}
        value={task ? dayjs(task.date, 'DD/MM/YYYY') : null}
      />
    </Form.Item>
  );
}
