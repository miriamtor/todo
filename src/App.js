import './styles/App.css';
import React, { useState } from 'react';
import TaskContext from './context/TaskContext';
import ModalForm from './components/shared/modalForm';
import Panel from './components/panels/panel';
import ButtonFilter from './components/shared/buttonFilter';
import InputSearch from './components/shared/inputSearch';
import TabsPanels from './components/panels/tabsPanels';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import UseLocalStorage from './customHooks.js/useLocalStorage';
import UseTaskFilter from './customHooks.js/useTaskFilter';
import { Layout, Space, ConfigProvider } from 'antd';

const { Header, Content } = Layout;


function App() {
  const [tasks, setTasks] = UseLocalStorage('tasks', []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const filteredTasks = UseTaskFilter(tasks, searchTerm, selectedTags);
  const screens = useBreakpoint();

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <ConfigProvider theme={{ token: { colorPrimary: '#65799B' } }}>
        <Layout>
          <Header className='header'>
            <InputSearch setSearchTerm={setSearchTerm} />
          </Header>
          <Content className='content'>
            <ModalForm />
            <ButtonFilter setSelectedTags={setSelectedTags}/>
            <Space className="content__panels">
              {screens.xs ? (
                <TabsPanels filteredTasks={filteredTasks} />
              ) : (
                <>
                  <Panel type="todo" filteredTasks={filteredTasks} />
                  <Panel type="done" filteredTasks={filteredTasks} />
                </>
              )}
            </Space>
          </Content>
        </Layout>
      </ConfigProvider>
    </TaskContext.Provider>
  );
}

export default App;
