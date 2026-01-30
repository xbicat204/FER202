import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/ex1"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Exercise 1
      </NavLink>

      <NavLink
        to="/ex2"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Exercise 2
      </NavLink>

      <NavLink
        to="/ex3"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Exercise 3
      </NavLink>

      <NavLink
        to="/ex4"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Exercise 4
      </NavLink>

      <NavLink
        to="/test"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Test useState
      </NavLink>
    </nav>
  );
}

export default NavBar;
