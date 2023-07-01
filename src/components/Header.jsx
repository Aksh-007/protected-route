import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/myorders">My Orders</Link>
      <Link to="/blogs">Blogs</Link>
      {isAuthenticated ? <p>User Login</p> : <p>User Logout</p>}
    </nav>
  );
};

export default Header;
