import Header from './Header.jsx';
// Varför blir det rött i importen?
import Columns from './Columns.jsx';
import { useState } from 'react';

function App() {

  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);

  // funktion för att hantera dragstart
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  //funktion för att hantera släpp
  const handleDrop = (e, targetColumn) => {
    const taskId = e.dataTransfer.getData('taskId');
    //flytta uppgiften från en kolumn till en annan baserat på targetColumn
    //Uppdatera staten för uppgifterna
  };


  return (
    <div className='App'>
      <Header />

      <main>
        <Columns
          title="To do"
          index={0}
          tasks={todoTasks}
        />
        <Columns
          title="In progress"
          index={1}
        />
        <Columns
          title="Done"
          index={2}
        />
      </main>
      
    </div>
  )
  
}

export default App
