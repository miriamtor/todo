import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { Select } from 'antd';

const { Option } = Select;

const ButtonFilter = ({ setSelectedTags }) => {
  const { tasks } = useContext(TaskContext);

  const allTags = Array.from(
    new Set(
      tasks.flatMap((task) => (task.tags?.map((tag) => tag.text) || []))
    )
  );

  const selectTag = (tags) => {
    setSelectedTags(tags);
  };

  return (
    <Select
      mode="multiple"
      style={{
        maxWidth: 400,
        width: '40%',
        marginLeft: 5,
        textAlign: 'left',
      }}
      placeholder="Etiqueta..."
      onChange={selectTag}
    >
      {allTags.length === 0 ? (
        <Option disabled>No hay etiquetas</Option>
      ) : (
        allTags.map((tag) => (
          <Option key={tag} value={tag} label={tag}>
            {tag}
          </Option>
        ))
      )}
    </Select>
  );
};

export default ButtonFilter;