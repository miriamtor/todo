import { useState } from 'react';
import { Form, Tag, Row, Col } from 'antd';
import TagsInput from './tagsInput';

const TagSection = ({ setTags, task, tags }) => {
  const [taskTags, setTaskTags] = useState(task ? [...task.tags] : []);

  const removeTag = (removedTag) => {
    const newTaskTags = taskTags.filter((tag) => tag.text !== removedTag.text);
    setTaskTags(newTaskTags);
    setTags(newTaskTags);
  };

  const handleTagsChange = (newTaskTags) => {
    setTaskTags(newTaskTags);
    setTags(newTaskTags);
  };

  const tagsToDisplay = task ? taskTags : tags;

  return (
    <Form.Item>
      <Row justify={window.innerWidth <= 700 ? 'start' : 'end'}>
        <Col>
          <TagsInput tags={tagsToDisplay} setTags={handleTagsChange} />
        </Col>
      </Row>
      <Row justify="start">
        <Col>
          <div style={{ marginTop: 5 }}>
            {tagsToDisplay.map((tag) => (
              <Tag
                key={tag.text}
                closable
                onClose={() => removeTag(tag)}
                color={tag.color}
              >
                {tag.text}
              </Tag>
            ))}
          </div>
        </Col>
      </Row>
    </Form.Item>
  );
};

export default TagSection;