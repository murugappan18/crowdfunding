import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white bg-opacity-80 backdrop-blur-md text-black flex justify-between shadow-md">
      <h1 className="text-lg font-bold">Crowdfunding</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/campaigns" className="hover:underline">
          Campaigns
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
