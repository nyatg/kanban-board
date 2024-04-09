import Header from './Header';
// Varför blir det rött i importen?
import Columns from './Columns';
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
          // onDragOver={?};
          onDrop={handleDrop}
          onDragstart={handleDragStart}
  
        />
        <Columns
          title="In progress"
          index={1}
          tasks={inProgressTasks}
          onDrop={handleDrop}
          onDragstart={handleDragStart}
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
