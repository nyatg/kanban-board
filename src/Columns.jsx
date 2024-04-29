import {useState, useEffect} from 'react'
import CreateTaskBtn from './CreateTaskBtn.jsx';
import Tasks from './Tasks.jsx';
import { Link } from 'react-router-dom';
import './index.css'


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
          <Link to='/doing'><h2 className='Columns-header'>{title}</h2></Link> 
          <Tasks columnTasks={columnTasks} onDragStart={onDragStart} dltTask={dltTask}/>
          {title === 'To do' ?<CreateTaskBtn setAllTasks={setAllTasks} allTasks={allTasks} /> : null}
    </div>
  )
}

export default Columns;