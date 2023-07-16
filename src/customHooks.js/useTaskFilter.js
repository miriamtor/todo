import { useEffect, useState } from 'react';

export default function UseTaskFilter(tasks, searchTerm, tags) {
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    let filteredTasks = tasks;

    if (searchTerm) {
      filteredTasks = filteredTasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (tags && tags.length > 0) {
      filteredTasks = filteredTasks.filter((task) =>
        tags.some((tag) => {
          return task.tags.some((taskTag) => taskTag.text === tag);
        })
      );
    }

    setFilteredTasks(filteredTasks);
  }, [tasks, searchTerm, tags]);

  return filteredTasks;
}