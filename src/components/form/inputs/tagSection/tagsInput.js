import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag } from 'antd';

const generateTagColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const TagsInput = ({ tags, setTags }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputVisible && inputRef.current?.focus();
  }, [inputVisible]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue.trim() !== '' && !tags?.some((tag) => tag.text === inputValue)) {
      const newTag = {
        text: inputValue.trim(),
        color: generateTagColor()
      };
      const newTags = [...tags, newTag];
      setTags(newTags);
    }
    setInputVisible(false);
    setInputValue('');
  };

  return (
    <div>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 115 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          onClick={() => setInputVisible(true)}
          style={{
            background: '#e0ecff',
            borderStyle: 'dashed',
            borderColor: '#bdd4f8',
            width: 115,
            padding: 2,
            paddingLeft: 6,
          }}
        >
          <PlusOutlined /> Añadir etiqueta
        </Tag>
      )}
    </div>
  );
};

export default TagsInput;