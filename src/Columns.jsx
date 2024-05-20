import { useContext} from 'react'
import CreateTaskBtn from './CreateTaskBtn.jsx';
import Tasks from './Tasks.jsx';
import { Link } from 'react-router-dom';
import './index.css'
import TaskContext from './TaskContext.jsx';


const Columns = ({title, index}) => {
    const {handleDrop} = useContext(TaskContext)


  return (
      <div
          className='Columns'
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
      >
          <Link to='/doing'><h2 className='Columns-header'>{title}</h2></Link> 
      <Tasks columnId={index} />
          {title === 'To do' ?<CreateTaskBtn/> : null}
    </div>
  )
}

export default Columns;