import { Form, Input } from 'antd';

const DescInput = () => {
  return (
    <Form.Item
      name="description"
      label="Descripción:"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa la descripción'
        }
      ]}
      hasFeedback
    >
      <Input.TextArea rows={4} placeholder="Escriba la descripción aquí" />
    </Form.Item>
  );
};

export default DescInput;