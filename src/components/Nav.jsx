import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <img className="logo" src="/src/assets/Logo.svg" alt="restaurant logo" />
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/booking">Reservation</Link>
        <Link to="/">Menu</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
      </div>

      {/* <ul className="menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Reservation</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul> */}
    </nav>
  );
}
