import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/jobs?search=${search}`);
    }
  }

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">

        {/* LEFT: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HireHub
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
              Jobs
            </Link>
          </nav>
        </div>

        {/* CENTER: Search */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6 max-w-md">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* RIGHT: Auth */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-700 font-medium">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;