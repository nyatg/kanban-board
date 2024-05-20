import Columns from './Columns';

const Board = () => {

    return (
        <main>
    <Columns
          title="To do"
          index={0}
        /> 
        <Columns
          title="In progress"
          index={1}
        />
        <Columns
          title="Done"
          index={2}
      />
  </main>
  )
}

export default Board