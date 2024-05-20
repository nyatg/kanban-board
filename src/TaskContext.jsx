import { createContext, useState } from "react";

const TaskContext = createContext();


export const TaskProvider = ({ children }) => {

  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);


  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDrop = (e, targetColumn) => {
    console.log("drop event triggered");

    const taskId = e.dataTransfer.getData('taskId');
    console.log("task id:", taskId);

    const taskToMove = allTasks.find(task => task.id === parseInt(taskId));
    const updatedTaskToMove = { ...taskToMove, columnIndex: targetColumn }

    const allTasksCopy = allTasks.map(task => {
      return updatedTaskToMove.id === task.id ? updatedTaskToMove : task;
    });
    localStorage.setItem('tasks', JSON.stringify(allTasksCopy));
    setAllTasks(allTasksCopy);

  }

  const dltTask = (taskId) => {
    const updatedTasks = allTasks.filter(task => task.id !== taskId);

    setAllTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  // const [todoTasks, setTodoTasks] = useState([]);
  // const [inProgressTasks, setInProgressTasks] = useState([]);;
  // const [doneTasks, setDoneTasks] = useState([]);

  // useEffect(() => {
  //   const newTodo = allTasks.filter(task => task.columnIndex === 0)
  //   const newInProgress = allTasks.filter(task => task.columnIndex === 1)
  //   const newDoneTasks = allTasks.filter(task => task.columnIndex === 2)

  //   setTodoTasks(newTodo);
  //   setInProgressTasks(newInProgress);
  //   setDoneTasks(newDoneTasks);
  // }, [allTasks]);

    const headerTitle = 'The Board App!';
  return (
      <TaskContext.Provider value={{ headerTitle, allTasks, setAllTasks, handleDragStart, handleDrop, dltTask}}>
          {children}
    </TaskContext.Provider>
  )
}

export default TaskContext;