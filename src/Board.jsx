import Columns from './Columns';


const Board = ({ onDrop, onDragStart, todoTasks, inProgressTasks, doneTasks, allTasks, setAllTasks }) => {
    

    return (
        <main>
    <Columns
          title="To do"
          index={0}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={todoTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, 0)}
          onDragStart={onDragStart}
        /> 
        <Columns
          title="In progress"
          index={1}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={inProgressTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, 1)}
          onDragStart={onDragStart}
        />
        <Columns
          title="Done"
          index={2}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          columnTasks={doneTasks}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, 2)}
          onDragStart={onDragStart}
      />
  </main>
  )
}

export default Board