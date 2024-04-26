import React from 'react';
import CreateTaskBtn from './CreateTaskBtn';
import Tasks from './Tasks';

const ColumnPage = ({ title, index, allTasks, setAllTasks, onDragOver, onDrop, onDragStart, columnTasks, dltTask }) => {
    return (
        <div
            className='Columns'
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, title)}
        >
            <h2 className='ToDo'>{title}</h2>
            <Tasks columnTasks={columnTasks} dltTask={dltTask} onDragStart={onDragStart} />
            <CreateTaskBtn setAllTasks={setAllTasks} allTasks={allTasks} />
        </div>
  )
}

export default ColumnPage;