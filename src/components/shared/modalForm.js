import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import FormTask from '../form/formTask';

const ModalForm = ({ task, disabled }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const buttonText = task ? 'Editar' : 'Añadir tarea';
  const buttonIcon = task ? <EditOutlined /> : <PlusCircleOutlined />;

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    form.resetFields();
    setTags([]);
  };

  return (
    <>
      <Button
        type={task ? "default" : "primary"}
        onClick={showModal}
        icon={buttonIcon}
        disabled={disabled}
        style={{ marginTop: 5 }}
      >
        {buttonText}
      </Button>
      <Modal title={buttonText} onCancel={closeModal} open={open} footer={null}>
        <FormTask
          closeModal={closeModal}
          form={form}
          task={task}
          tags={tags}
          setTags={setTags}
        />
      </Modal>
    </>
  );
}

export default ModalForm;