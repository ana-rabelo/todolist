import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import { useState } from 'react';

function App() {

  const [tasks, setTask] = useState([]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks, 
      {
        id: Math.floor(Math.random() * 10000) + 1,
        title: taskTitle,
        isCompleted: false
        /* conclusionDate: null */
      }
    ]);
  }

  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks />
    </>
  )
}

export default App
