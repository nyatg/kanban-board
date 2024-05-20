import { useCallback, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TaskContext from './TaskContext';

    
function TaskModal({ task, setShowModal, setSelectedTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [taskTitle, setTaskTitle] = useState(task.task);
    const {dltTask, setAllTasks, allTasks} = useContext(TaskContext)
    
    const modalStyle = {
        position: 'absolute',
        border: 'green solid 1px',
        top: '50%',
        left: '50%',
        backgroundColor: 'green',
        height: '30%',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        backdropFilter: 'blur(10px)',
        padding: '30px',
        margin: '20px',
        borderRadius: '20px',
        border: 'solid 4px rgb(125, 68, 211)',
        backgroundColor: 'rgb(142, 97, 209)',
        borderRadius: '12px',
        padding: '10px',
        color: 'rgb(235, 239, 242)',
        margin: 'auto'
    }

    const modalBtnStyle = {
        border: 'solid 2px rgb(125, 68, 211)',
        borderRadius: '10px',
        padding: '3px',
        backgroundColor: 'rgb(226, 212, 238)',
        color: 'rgb(125, 68, 211)'
    }
    const modalDltStyle = {
        border: 'solid 2px rgb(125, 68, 211)',
        borderRadius: '10px',
        padding: '3px',
        backgroundColor: '#b30e0e',
        color: '#FFF'
    }

    
  const handleClose = () => {
      setShowModal(false);
      setSelectedTask(null);
    }

    const handleDelete = () => {
       dltTask(task.id);
        setShowModal(false);
        setSelectedTask(null)
    }

    const handleEdit = () => {
        console.log('trying to edit');
        setIsEditing(true);
    }


    const handleSaveChanges = () => {
        const updatedTask = { ...task, task: taskTitle };
        const updatedTasks = allTasks.map(t => (t.id === updatedTask.id ? updatedTask : t));
        console.log(updatedTask)
        setAllTasks(updatedTasks);

        console.log(`det ändras till ${taskTitle}`)
        setIsEditing(false);
        setSelectedTask(null)
      
    }


    return (
        <Modal.Dialog
        style={modalStyle}>
                <Modal.Header>
                    {isEditing ? (
                        <input
                            type='text'
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)} />
                    ) : (
                            <Modal.Title>
                                <h2>{taskTitle}</h2>
                            </Modal.Title>
                    )}
                </Modal.Header>
                <Modal.Body>
                  <p></p>  
                </Modal.Body>

                <Modal.Footer >
                <Button style={modalBtnStyle} onClick={handleClose}>Close</Button>
                
                {isEditing ? (<Button style={modalBtnStyle} onClick={handleSaveChanges}>Save changes</Button>) : (<Button style={modalBtnStyle} onClick={handleEdit}>Edit Task</Button>)}
                    <Button style={modalDltStyle} onClick={handleDelete}>Delete Task</Button>
                </Modal.Footer>
            </Modal.Dialog>
    );
}

export default TaskModal;