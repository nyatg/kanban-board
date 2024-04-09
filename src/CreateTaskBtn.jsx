import { useState } from 'react';

const CreateTaskBtn = ({onAddTask, taskTitle, setTaskTitle}) => {
    
    const [showInput, setShowInput] = useState(false);
  


    const handleCreateTask = () => {
        setShowInput(true);
    }
    
    const handleInputChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleConfirmTask = () => {
        console.log('Ny uppgift skapad:', taskTitle);
        onAddTask(taskTitle);
        setShowInput(false);
    }

  return (
      <div>
          {!showInput && <button onClick={handleCreateTask}>Create new task</button>}
          {showInput && (
              <div>
                  <input type="text" value={taskTitle} onChange={handleInputChange} placeholder="What's the mission?" id='inputTask' />
                  <button onClick={handleConfirmTask}>Confirm</button>
              </div>
          )}
    </div>
  )
}

export default CreateTaskBtn;