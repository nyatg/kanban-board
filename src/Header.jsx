import { NavLink } from "react-router-dom";
import { useContext } from "react";
import TaskContext from "./TaskContext";

const Header = () => {
  const { headerTitle } = useContext(TaskContext);

  return (
      <header className='Header'>
      <h1>{headerTitle}</h1>
      <nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/todo'>
          To do
        </NavLink>
        <NavLink to='/doing'>
          Doing
        </NavLink>
        <NavLink to='/done'>
          Done
        </NavLink>
      </nav>
      </header>
  )
}

export default Header;