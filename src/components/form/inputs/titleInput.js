import { Form, Input } from 'antd';

const TitleInput = () => {
  return (
    <Form.Item
      name="title"
      label="Título:"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa el título'
        }
      ]}
      hasFeedback
    >
      <Input placeholder="Escriba el título aquí" />
    </Form.Item>
  );
}

export default TitleInput;