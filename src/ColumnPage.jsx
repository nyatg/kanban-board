import React, { useContext } from 'react';
import CreateTaskBtn from './CreateTaskBtn';
import Tasks from './Tasks';
import TaskContext from './TaskContext';

const ColumnPage = ({ title, index}) => {
    const {handleDrop} = useContext(TaskContext)
    return (
        <div
            className='Columns'
            onDragOver={(e) =>e.preventDefault()}
            onDrop={(e) => handleDrop(e, title)}
        >
            <h2 className='Columns-header'>{title}</h2>
            <Tasks columnId={index} />
            {/* <CreateTaskBtn /> gör så man ba kan se den i den första kolumnen*/}
        </div>
  )
}

export default ColumnPage;