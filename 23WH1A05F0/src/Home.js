import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Student Management System</h1>
      <nav>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
