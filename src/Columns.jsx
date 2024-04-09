import {useState, useEffect} from 'react'
import CreateTaskBtn from './CreateTaskBtn.jsx';
import Tasks from './Tasks.jsx';


const Columns = ({title, index, tasks: columnTasks, onDragOver, onDrop}) => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [hasFetchedTasks, setHasFetchedTasks] = useState(false);

    useEffect(() => {
        if (!hasFetchedTasks && index === 0) {
            const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        
            if (savedTasks) {
                setTasks(savedTasks);
            } setHasFetchedTasks(true);
        }
    }, [hasFetchedTasks, setHasFetchedTasks]);

    
    const addTask = (task) => {
        console.log(task);

        //id för varje task
        const taskId = tasks.length > 0 ? tasks[tasks.length -1].id +1 : 0;

        const newTask = { id: taskId, task: task };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTaskTitle('');
    }

const dltTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);

        setTasks(updatedTasks);

       localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
    
  return (
      <div
          className='Columns'
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, title)}
      >
          <h2 className='ToDo'>{title}</h2>
          <Tasks tasks={tasks} dltTask={dltTask}/>
          <CreateTaskBtn onAddTask={addTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle} />
    </div>
  )
}

export default Columns;