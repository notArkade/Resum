import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p>RESUM</p>
      </Link>
      <Link to="/upload" className="primary-button">
        <p>Upload Resume</p>
      </Link>
    </nav>
  );
};

export default Navbar;
