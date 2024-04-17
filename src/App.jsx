import Header from './Header.jsx';
// Varför blir det rött i importen?
import Columns from './Columns.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [allTasks, setAllTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);;
  const [doneTasks, setDoneTasks] = useState([]);
  
  useEffect(() => {
    const newTodo = allTasks.filter(task => task.columnIndex === 0)
    const newInProgress = allTasks.filter(task => task.columnIndex === 1)
    const newDoneTasks = allTasks.filter(task => task.columnIndex === 2)

    setTodoTasks(newTodo);
    setInProgressTasks(newInProgress);
    setDoneTasks(newDoneTasks);
  }, [allTasks]);

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
    setAllTasks(allTasksCopy);
    
  };

  return (
    <div className='App'>
      <Header />

      <main>
        <Columns
          title="To do"
          index={0}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={todoTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 0)}
          onDragStart={handleDragStart}
        />
        <Columns
          title="In progress"
          index={1}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={inProgressTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 1)}
          onDragStart={handleDragStart}
        />
        <Columns
          title="Done"
          index={2}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={doneTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 2)}
          onDragStart={handleDragStart}
        />
      </main>
      
    </div>
  )
  
}

export default App
