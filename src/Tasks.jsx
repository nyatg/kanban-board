import React, { useState, useContext } from 'react';
import TaskModal from './TaskModal';
import TaskContext from './TaskContext';



const Tasks = ({  columnId }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const { allTasks, setAllTasks, handleDragStart, dltTask } = useContext(TaskContext);

    const filteredTasks = allTasks.filter(task => task.columnIndex === columnId) 
    console.log(columnId);
    

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setTaskTitle(task.task);
        setShowModal(true);
    }

    const handleDltClick = (e, id) => {
        e.stopPropagation();
        dltTask(id)
        setSelectedTask(null)
    }    

    
    return (
        <div className='Tasks'>
            {filteredTasks.map((task) => (
                <div className='singleTask'
                    key={task.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    onClick={()=> handleTaskClick(task)}
                >
                    <h3>{task.task}</h3>
                    <p className='datePara'>{new Date().toLocaleDateString()}</p>
                    <button className='delete-btn' onClick={(e) => handleDltClick(e, task.id)}>Delete task</button>
                    
                </div>
            ))}
            {selectedTask &&
                (<TaskModal
                    task={selectedTask}
                    setShowModal={setShowModal}
                    taskTitle={taskTitle}
                setSelectedTask={setSelectedTask}
                
                />)}
        </div>
    );
};

export default Tasks;
