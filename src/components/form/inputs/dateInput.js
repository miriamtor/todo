import React from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default function DateInput({ task }) {
  const disabledDate = (current) => {
    const today = moment().startOf('day');
    return current && current < today;
  };
  

  return (
    <Form.Item
      label="Fecha de realización de la tarea:"
      name="date"
      rules={[
        {
          required: task ? false : true,
          message: 'Por favor ingresa la fecha de realización'
        }
      ]}
    >
      <DatePicker
        placeholder="Fecha"
        format="DD-MM-YYYY"
        disabledDate={disabledDate}
        defaultValue={task ? dayjs(task.date, 'DD-MM-YYYY') : null}
      />
    </Form.Item>
  );
}