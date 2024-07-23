import { Header } from './components/Header';
import { Tasks } from './components/Tasks'
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function loadSavedTasks(){
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedTasks){
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => { 
    loadSavedTasks() 
  }, []);

  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskId, taskTitle, taskDate) {
    if (taskId === 0){
      setTasksAndSave([
        ...tasks, 
        {
          id: Math.floor(Math.random() * 10000) + 1,
          title: taskTitle,
          isCompleted: false,
          conclusionDate: taskDate
        }
      ]);}
    else {
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, title: taskTitle, conclusionDate: taskDate } : task
      );
      setTasksAndSave(updatedTasks);
      setTaskToEdit(null);
    }
  }

  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toogleTaskCompletedById(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });

    newTasks.sort((a, b) => a.isCompleted - b.isCompleted);

    setTasksAndSave(newTasks);
  }

  function handleEditTask(task) {
    setTaskToEdit(task);
  }  

  return (
    <>
    <Header onAddTask={addTask} taskToEdit={taskToEdit} />
    <Tasks 
      tasks={tasks}
      onDelete={deleteTaskById}
      onComplete={toogleTaskCompletedById}
      onEdit={handleEditTask}
    />
    </>
  )
}

export default App
