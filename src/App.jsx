import Header from './Header.jsx';
// Varför blir det rött i importen?
import Columns from './Columns.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColumnPage from './ColumnPage.jsx';
import Board from './Board.jsx';
import { TaskProvider } from './TaskContext.jsx';

function App() {

  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
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
    localStorage.setItem('tasks', JSON.stringify(allTasksCopy));
    setAllTasks(allTasksCopy);
    
  };

  return (
    <div className='App'>
     <TaskProvider>
      
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            index
            element={
              <Board
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                onDrop={handleDrop}
                onDragStart={handleDragStart}
                todoTasks={todoTasks}
                inProgressTasks={inProgressTasks}
                doneTasks={doneTasks}
              />}
          />
          <Route
            path='/todo'
            element={
              <ColumnPage
                title="To do"
                index={1}
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                columnTasks={todoTasks}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, 1)}
                onDragStart={handleDragStart}
              />}
          />
          <Route
            path='/doing'
            element={
              <ColumnPage
              title="In progress"
              index={1}
              allTasks={allTasks}
              setAllTasks={setAllTasks}
              columnTasks={inProgressTasks}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, 1)}
              onDragStart={handleDragStart}
              />}
          />
          <Route
            path='/done'
            element={
              <ColumnPage
                title="Done"
                index={1}
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                columnTasks={doneTasks}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, 1)}
                onDragStart={handleDragStart}
              />}
          />
        </Routes>
      </Router>
      </TaskProvider>
    </div>
  )
  
}

export default App
