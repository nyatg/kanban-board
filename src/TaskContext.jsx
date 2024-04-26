import { createContext, useState } from "react";

const TaskContext = createContext();


export const TaskProvider = ({ children }) => {


    const headerTitle = 'The Board App!';
  return (
      <TaskContext.Provider value={{ headerTitle}}>
          {children}
    </TaskContext.Provider>
  )
}

export default TaskContext;