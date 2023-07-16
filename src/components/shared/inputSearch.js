import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const InputSearch = ({ setSearchTerm }) => {
  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      placeholder="Buscar"
      prefix={<SearchOutlined />}
      onChange={(e) => onChangeSearch(e)}
      style={{
        width: 250,
        marginTop: 10,
      }}
    />
  );
};

export default InputSearch;