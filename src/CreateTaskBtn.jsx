import { useState } from 'react';

const CreateTaskBtn = ({ setAllTasks, allTasks}) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [showInput, setShowInput] = useState(false);
  
    const addTask = (task) => {
        console.log(task);

        //id för varje task
        const taskId = allTasks.length > 0 ? allTasks[allTasks.length - 1].id + 1 : 0;

        const newTask = { id: taskId, task: task, columnIndex: 0 };

        const updatedTasks = [...allTasks, newTask];
        setAllTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTaskTitle('');
    }

    const handleCreateTask = () => {
        setShowInput(true);
    }
    
    const handleInputChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleConfirmTask = () => {
        console.log('Ny uppgift skapad:', taskTitle);
        addTask(taskTitle);
        setShowInput(false);
    }

  return (
      <div>
          {!showInput && <button className='create-btn' onClick={handleCreateTask}>Create new task</button>}
          {showInput && (
              <div>
                  <input type="text" value={taskTitle} onChange={handleInputChange} placeholder="What's the mission?" id='inputTask' />
                  <button className='confirm-btn' onClick={handleConfirmTask}>Confirm</button>
              </div>
          )}
    </div>
  )
}

export default CreateTaskBtn;