import Panel from './panel';
import { Tabs } from 'antd';

const TabsPanels = ({ filteredTasks }) => {
  return (
    <Tabs defaultActiveKey={1} items={[
      { label: "To Do", key: 1, children: <Panel type="todo" filteredTasks={filteredTasks} />  },
      { label: "Done", key: 2, children: <Panel type="done" filteredTasks={filteredTasks} /> }
    ]}>
    </Tabs>
  );
};

export default TabsPanels;