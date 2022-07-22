import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/location">Location</Link>
    </div>
  );
}

export default Navbar;
