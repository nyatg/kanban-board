import {useState, useEffect} from 'react'
import CreateTaskBtn from './CreateTaskBtn.jsx';
import Tasks from './Tasks.jsx';
import { Link } from 'react-router-dom';


const Columns = ({title, index, allTasks, setAllTasks, onDragOver, onDrop, onDragStart, columnTasks}) => {
    

const dltTask = (taskId) => {
        const updatedTasks = allTasks.filter(task => task.id !== taskId);

        setAllTasks(updatedTasks);

       localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
    
  return (
      <div
          className='Columns'
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, title)}
      >
          <Link to='/doing'><h2 className='ToDo'>{title}</h2></Link> 
          <Tasks columnTasks={columnTasks} onDragStart={onDragStart} dltTask={dltTask}/>
          <CreateTaskBtn setAllTasks={setAllTasks} allTasks={allTasks} />
    </div>
  )
}

export default Columns;