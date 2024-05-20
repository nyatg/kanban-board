import Header from './Header.jsx';
// Varför blir det rött i importen?
import Columns from './Columns.jsx';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColumnPage from './ColumnPage.jsx';
import Board from './Board.jsx';
import { TaskProvider } from './TaskContext.jsx';


function App() {

  return (
    <div className='App'>
     <TaskProvider>
      
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            index
            element={
              <Board/>}
          />
          <Route
            path='/todo'
            element={
              <ColumnPage
                title="To do"
                index={0}
              />}
          />
          <Route
            path='/doing'
            element={
              <ColumnPage
              title="In progress"
              index={1}
              />}
          />
          <Route
            path='/done'
            element={
              <ColumnPage
                title="Done"
                index={2}
              />}
          />
        </Routes>
      </Router>
      </TaskProvider>
    </div>
  )
  
}

export default App
