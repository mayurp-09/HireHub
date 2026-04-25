import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For Mobile Menu
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
  };

  // Helper for active link styling
  const activeLink = "text-blue-600 font-semibold";
  const normalLink = "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">
{/* LEFT: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            HireHub
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Jobs
            </NavLink>
            {user && (
              <NavLink to="/my-applications" className={({ isActive }) => isActive ? activeLink : normalLink}>
                Applied Jobs
              </NavLink>
            )}
            <NavLink to="/saved-jobs" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Saved Jobs
            </NavLink>
          </nav>
        </div>
{/* CENTER: Search (Better Width) */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6 max-w-sm">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-full 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/>
          </div>
        </form>
{/* RIGHT: Auth & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-500 uppercase font-bold">Welcome</p>
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
              </div>
{/* User Avatar Circle */}
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold border border-blue-200">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="hidden sm:block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition">
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 shadow-md transition">
              Login
            </Link>
          )}
{/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
{/* MOBILE NAV DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <NavLink to="/" className="block text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/jobs" className="block text-gray-700" onClick={() => setIsMenuOpen(false)}>Jobs</NavLink>
          {user && (
             <button onClick={handleLogout} className="text-red-500 font-medium">Logout</button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;