import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "white" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "white" }}>Home</Link>
      <Link to="/topics" style={{ margin: "0 1rem", color: "white" }}>Topics</Link>
      <Link to="/questions/html/theory" style={{ margin: "0 1rem", color: "white" }}>Theory</Link>
      <Link to="/questions/javascript/practical" style={{ margin: "0 1rem", color: "white" }}>Practical</Link>
    </nav>
  );
};

export default Navbar;
