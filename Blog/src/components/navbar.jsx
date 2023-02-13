import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container d-flex">
        <Link to="/add">Add</Link>
      </div>
    </nav>
  );
};

export default Navbar;
