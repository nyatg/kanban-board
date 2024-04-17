import React, { useState } from 'react';
import Columns from './Columns';

const Tasks = ({columnTasks, dltTask, onDragStart}) => {
    return (
        <div className='Tasks'>
            {columnTasks.map((task) => (
                <div className='singleTask'
                    key={task.id}
                    draggable="true"
                    onDragStart={(e) => onDragStart(e, task.id)}
                >
                    <h3>{task.task}</h3>
                    <p className='datePara'>{new Date().toLocaleDateString()}</p>
                    <button onClick={() => dltTask(task.id)}>Delete task</button>
                </div>
            ))}
          
        </div>
    );
};

export default Tasks;
