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
          home
        </NavLink>
        <NavLink to='/todo'>
          todo
        </NavLink>
        <NavLink to='/doing'>
          doing
        </NavLink>
        <NavLink to='/done'>
          done
        </NavLink>
      </nav>
      </header>
  )
}

export default Header;